import InputLink from "@/components/InputLink"
import LinkList from "@/components/LinkList";
import Search from "@/components/Search"
import { Suspense } from "react";

function page({searchParams}) {
  const search = searchParams?.search || '';
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="p-4">
      <h3 className="font-semibold text-gray-700 text-xl my-4">Buat Tautan Baru</h3>
      <InputLink/>

      <div className="mt-8">
        <span className="flex justify-between items-center px-4 pt-4 mb-8">
          <h3 className="font-semibold text-gray-700 text-lg my-4">Tautan terakhir ditambahkan</h3>
          <Search/>
        </span>
        <Suspense fallback={<div>Loading...</div>}>
          <LinkList search={search} currentPage={currentPage}/>
        </Suspense>
        
      </div>
    </div>
  )
}

export default page