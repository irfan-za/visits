import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next();
  const supabaseMiddleware = createMiddlewareClient({ req, res });
  const pathname= req.nextUrl.pathname
  const shortUrl= pathname.replace(/^\/p\//, '')

  const { data, error } = await supabaseMiddleware
  .from('urls')
  .select('long_url')
  .eq('short_url', shortUrl)
  .single();
  
  if(data){
    return NextResponse.redirect(new URL(data.long_url, req.url));
  }
}


export const config = {
  matcher: ['/p/:path*'],
};