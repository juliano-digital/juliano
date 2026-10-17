import { createClient } from '@supabase/supabase-js';

// Substitua pelos seus valores do Supabase (painel do projeto > Settings > API)
const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || 'https://bncxjzqofcoiijfjsdad.supabase.co';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuY3hqenFvZmNvaWlqZmpzZGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwNDcyOTYsImV4cCI6MjA5NjYyMzI5Nn0.0ZlnboGuJN6FFoSjU9wIT7XFW20NjT_uunkCPmqQT6k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
