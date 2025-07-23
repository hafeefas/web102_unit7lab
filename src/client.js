import { createClient } from '@supabase/supabase-js'

const URL = 'https://rtgmdxhjoolrsqhsavkc.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0Z21keGhqb29scnNxaHNhdmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNDY0MTMsImV4cCI6MjA2ODgyMjQxM30.lZiPX0Uw44M3GE-2BM-Sw-UZUGn7oMT7PvypcBurAGs'
export const supabase = createClient(URL, API_KEY)
