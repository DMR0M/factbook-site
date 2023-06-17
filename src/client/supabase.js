import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dnxrvpmqwnqodtvlbjcv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRueHJ2cG1xd25xb2R0dmxiamN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5MzU2ODUsImV4cCI6MjAwMjUxMTY4NX0.9K6bWxTti4b7R7_hplM7WKc2vTTNvYaPzWNnnPZjxQk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
