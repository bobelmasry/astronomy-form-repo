import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    'https://ytcrlhunvsrhhiagfqoa.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Y3JsaHVudnNyaGhpYWdmcW9hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MzA3OTAsImV4cCI6MjAyNTIwNjc5MH0.ke5FhCRVwyxb_nflqN_bexctY5kDhLhWq51bMsy5vOo'
)