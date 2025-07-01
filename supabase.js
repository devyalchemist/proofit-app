import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ugecxtdhwdqievtmcdwt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZWN4dGRod2RxaWV2dG1jZHd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzODIxMTUsImV4cCI6MjA2Njk1ODExNX0.hNhhjbi9RH7ukSoG9kp_6ZebzLGjae5P0u852C1wg0E";
export const supabase = createClient(supabaseUrl, supabaseKey);
