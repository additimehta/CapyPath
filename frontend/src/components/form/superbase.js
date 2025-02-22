import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pjrlpibdhsjzvnqcdgnd.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcmxwaWJkaHNqenZucWNkZ25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNTI4ODYsImV4cCI6MjA1NTgyODg4Nn0.scPtlGAAuv3_qKdyllJ8CbLhUJpvojzzTQjbxYj8Oo0";
export const supabase = createClient(supabaseUrl, supabaseKey);
 