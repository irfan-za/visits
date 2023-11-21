import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req){
  const res = NextResponse.next();
  const supabaseMiddleware = createMiddlewareClient({ req, res });
  const pathname= req.nextUrl.pathname

  // redirect to longurl
  if(pathname.startsWith('/p/')){
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
  // protecting routes
  else{
    const { data: { user } } = await supabaseMiddleware.auth.getUser()
    if(pathname=== '/profile' && !user){
      const url=new URL('/', req.url)
      return NextResponse.redirect(url.href)
    }
    else if(pathname.startsWith('/auth') && user){
      return NextResponse.redirect(new URL('/profile', req.url));
    }
    else{
      return NextResponse.next()
    }
  }
}




export const config = {
  matcher: ['/p/:path*', '/profile', '/auth/:path*'],
};
