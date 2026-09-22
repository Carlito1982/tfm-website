// Shared JSON-LD helpers.

// An article/job image field is sometimes a site-relative path ("/images/x.jpg")
// and sometimes an already-absolute external URL (e.g. supplied Unsplash images).
// Only prefix the site origin onto relative paths; never onto an absolute URL.
export function absoluteImageUrl(image: string, origin = "https://www.thefurnituremagazine.com"): string {
  if (/^https?:\/\//i.test(image)) return image
  return `${origin}${image}`
}

// JSON.stringify does not escape "<", so a value containing "</script>" (or an
// attacker-controlled "<script>") can break out of the JSON-LD script tag.
// Escaping "<" as < is inert in JSON but never closes the tag in HTML.
export function jsonLdHtml(data: unknown): { __html: string } {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") }
}
