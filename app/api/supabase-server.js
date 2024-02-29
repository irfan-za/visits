import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabaseServer = async()=>createServerComponentClient({ cookies });
export default supabaseServer;
