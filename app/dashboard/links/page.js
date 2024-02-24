import InputLink from "@/components/InputLink";
import LinkList from "@/components/list/LinkList";
import ListSkeleton from "@/components/list/ListSkeleton";
import Search from "@/components/Search";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";

function page({ searchParams }) {
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="p-4">
      <h3 className="my-4 text-xl font-semibold text-gray-700">
        Buat Tautan Baru
      </h3>
      <InputLink />

      <div className="mt-8">
        <span className="mb-8 flex items-center justify-between px-4 pt-4">
          <h3 className="my-4 text-lg font-semibold text-gray-700">
            Tautan terakhir ditambahkan
          </h3>
          <Search />
        </span>
        <Suspense fallback={<ListSkeleton />}>
          <LinkList search={search} currentPage={currentPage} />
        </Suspense>
      </div>
      <Toaster />
    </div>
  );
}

export default page;
