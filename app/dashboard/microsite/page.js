import ListSkeleton from "@/components/list/ListSkeleton";
import MicrositeList from "@/components/list/MicrositeList";
import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function page({ searchParams }) {
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="p-4">
      <div className="mt-8">
        <span className="mb-8 flex items-center justify-between px-4 pt-4">
          <Button asChild>
            <Link href={"/dashboard/microsite/create"}>
              <Plus className="mr-2 h-4 w-4" /> Buat baru
            </Link>
          </Button>
          <Search />
        </span>
        <Suspense fallback={<ListSkeleton />}>
          <MicrositeList search={search} currentPage={currentPage} />
        </Suspense>
      </div>
      <Toaster />
    </div>
  );
}

export default page;
