import supabase from "@/app/api/supabase";
import { InputForm } from "@/components/form/InputForm";
import { Toaster } from "@/components/ui/toaster";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function page({ params }) {
  const supabaseServer = createServerComponentClient({ cookies });
  const { data: url } = await supabase
    .from("urls")
    .select()
    .eq("id", params.id)
    .single();
  const {
    data: { session },
  } = await supabaseServer.auth.getSession();
  return (
    <div className="mt-24 lg:mt-0">
      <InputForm
        currentUserId={session.user.id}
        currentEditData={params?.id}
        shortUrl={url.short_url}
        longUrl={url.long_url}
      />
      <Toaster />
    </div>
  );
}

export default page;
