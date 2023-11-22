import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  const shortUrl= pathname.replace(/^\/p\//, '')
  
  const { data, error } = await supabaseMiddleware
  .from('urls')
  .select('long_url')
  .eq('short_url', shortUrl)
  .single();
  
  if(!error){
    return NextResponse.redirect(new URL(data.long_url, req.url));
  }
}