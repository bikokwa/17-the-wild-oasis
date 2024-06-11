import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wxgxgtkdcnzlnwbvizhd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4Z3hndGtkY256bG53YnZpemhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTcwODUsImV4cCI6MjAzMjQ5MzA4NX0.z14FJh_k2BYq7FNcbiyPV72ZerR88-RQwzm-NKVhEM4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
