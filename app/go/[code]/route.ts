import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

// The Furniture Magazine click redirector.
//
// Every outbound link TFM publishes points here rather than at the destination,
// so the click is counted on our own infrastructure and can still be produced in
// three years when an advertiser asks us to justify a renewal.
//
// Privacy: no IP address, no cookie, no user agent string and nothing else that
// identifies a person is recorded. Only the code, the time, and coarse context.
// That keeps it aggregate analytics, which needs no consent banner to run.

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const SITE = "https://www.thefurnituremagazine.com"

function deviceFrom(ua: string): string {
  const s = ua.toLowerCase()
  if (/ipad|tablet|playbook|silk/.test(s)) return "tablet"
  if (/mobi|iphone|android.*mobile|phone/.test(s)) return "mobile"
  if (!s) return "unknown"
  return "desktop"
}

function hostFrom(referer: string | null): string | null {
  if (!referer) return null
  try {
    return new URL(referer).host || null
  } catch {
    return null
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params

  if (!code || !/^[A-Za-z0-9._-]{1,64}$/.test(code)) {
    return NextResponse.redirect(SITE, { status: 302 })
  }

  const { data: link, error } = await supabase
    .from("tfm_links")
    .select("code, destination, issue, section, medium")
    .eq("code", code)
    .eq("is_active", true)
    .maybeSingle()

  // An unknown or retired code sends the reader to the home page rather than to
  // an error. A dead link in a printed advert should still land somewhere useful.
  if (error || !link) {
    return NextResponse.redirect(SITE, { status: 302 })
  }

  // Only http and https destinations are ever followed.
  let destination: URL
  try {
    destination = new URL(link.destination)
    if (destination.protocol !== "https:" && destination.protocol !== "http:") {
      return NextResponse.redirect(SITE, { status: 302 })
    }
  } catch {
    return NextResponse.redirect(SITE, { status: 302 })
  }

  // Log, but never at the cost of the reader's journey. If the insert fails the
  // redirect still happens; a lost click is better than a broken link.
  try {
    await supabase.from("tfm_link_clicks").insert({
      code: link.code,
      issue: link.issue,
      section: link.section,
      medium: link.medium,
      referrer_host: hostFrom(request.headers.get("referer")),
      device: deviceFrom(request.headers.get("user-agent") ?? ""),
      country: request.headers.get("x-vercel-ip-country"),
    })
  } catch {
    // swallowed on purpose
  }

  return NextResponse.redirect(destination.toString(), { status: 302 })
}
