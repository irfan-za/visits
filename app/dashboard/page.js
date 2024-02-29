import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Dashboard() {
  const supabaseServer = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();
  if (!session) {
    return <div className="mt-24">Loading...</div>;
  } else {
    return <div className="mt-24">{session.user.email}</div>;
  }
}
