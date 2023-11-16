import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

async function redirectMiddleware(req,  supabaseMiddleware) {
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
async function authMiddleware(req, supabaseMiddleware) {
  const pathname= req.nextUrl.pathname
  
  const { data: { user } } = await supabaseMiddleware.auth.getUser()
  if(pathname=== '/profile' && !user){
    console.log('🔥', user);
    return NextResponse.redirect(new URL('/', req.url))
  }
  else if(pathname.startsWith('/auth') && user){
    return NextResponse.redirect(new URL('/profile', req.url));
  }
  else{
    return NextResponse.next()
  }
}

export async function middleware(req){
  const res = NextResponse.next();
  const supabaseMiddleware = createMiddlewareClient({ req, res });

  await redirectMiddleware(req, supabaseMiddleware);
  await authMiddleware(req, supabaseMiddleware);
}
export const config = {
  matcher: ['/p/:path*', '/profile', '/auth/:path*'],
};
