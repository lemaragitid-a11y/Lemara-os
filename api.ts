import { NextResponse } from 'next/server'; import { createClient } from '@/lib/supabase/server';
export async function auth(){const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)return {response:NextResponse.json({error:'Authentication required'},{status:401})} as const;return {supabase,user} as const}
