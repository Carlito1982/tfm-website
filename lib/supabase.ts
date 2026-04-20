import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface SupabaseJob {
  id: string
  title: string
  description: string | null
  published_description: string | null
  location: string | null
  postcode: string | null
  salary_min: number | null
  salary_max: number | null
  job_type: "permanent" | "contract" | "temporary" | null
  skills_required: string[] | null
  status: string | null
  is_published: boolean
  published_at: string | null
  created_at: string
}
