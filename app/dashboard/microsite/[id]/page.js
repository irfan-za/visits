import supabaseServer from "@/app/api/supabase-server";
import { CollapsibleLink } from "@/components/CollabsibleLink";
import { Toaster } from "@/components/ui/toaster";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

async function page({ params }) {
  const {
    data: { session },
  } = await supabaseServer().auth.getSession();
  const { data } = await supabaseServer()
    .from("microsites")
    .select()
    .eq("id", params?.id)
    .single();
  return (
    <div className="mt-24 lg:mt-0">
      <div className="flex items-center justify-start border-b p-4">
        <Link href={"/dashboard/microsite"}>
          <ArrowLeft className="mr-2 h-6 w-6" />
        </Link>
        <span>Microsite</span>
      </div>
      <section className="mt-2 flex space-x-3 p-4">
        <div>
          <CollapsibleLink
            currentUserId={session.user.id}
            currentEditData={data}
          />
        </div>
        <div className="hidden w-1/2 border border-red-600 sm:block">right</div>
      </section>
      <Toaster />
    </div>
  );
}

export default page;
