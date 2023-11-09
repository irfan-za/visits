import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  // const res = NextResponse.next();
  // const supabaseMiddleware = createMiddlewareClient({ req, res });
  // const shortUrl= req.nextUrl.pathname

  // const { data, error } = await supabaseMiddleware
  // .from('urls')
  // .select('long_url')
  // .eq('short_url', shortUrl)
  // .single();
  // console.log(data);

  // if(data){
  //   return NextResponse.redirect(new URL('/profile', req.url));
  // }
}


// export const config = {
//   matcher: ['/:path*'],
// };