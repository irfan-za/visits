import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { shortUrl } = await req.json();
  const { data, error } = await supabase
    .from("urls")
    .select("long_url")
    .eq("short_url", shortUrl)
    .single();

  if (!error) {
    return NextResponse.json({
      status: 200,
      message: "Successfully get long url",
      longUrl: data.long_url,
    });
  }
}
