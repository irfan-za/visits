import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabaseServer = createServerComponentClient({ cookies });
const {
  data: { session },
} = await supabaseServer.auth.getSession();
export default supabaseServer;
