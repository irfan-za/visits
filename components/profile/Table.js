import React, { Fragment, useEffect, useState } from "react";
import FormModal from "../modal/FormModal";
import { Menu, Transition } from "@headlessui/react";
import supabase from "../../app/api/supabase";
import DeleteModal from "../modal/DeleteModal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formatDate } from "@/utils/formatDate";

function Table() {
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);
  const [currentEditData, setCurrentEditData] = useState(null);
  const [currentDeleteData, setCurrentDeleteData] = useState(null);
  const [currentUserId, setCurrentUserId] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [search, setSearch] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  useEffect(() => {
    const f = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        if (search !== "") {
          // filterWithoutFetch
          fetchWithFilter(user, search);
        } else {
          if (router && searchParams.get("search")) {
            const search = searchParams.get("search");
            fetchWithFilter(user, search);
          } else {
            const { data: urls, error } = await supabase
              .from("urls")
              .select()
              .eq("supabase_auth_id", user.id)
              .order("created_at", { ascending: false });
            !error ? setData(urls) : alert(error.message);
            setCurrentUserId(user.id);
          }
        }
      }
    };
    f();
  }, [router, search, searchParams]);

  const doSearch = async (e) => {
    setSearch(e.target.value);
    router.replace(`${pathName}?search=${e.target.value}`);
  };
  // const next=async()=>{
  //   const { data: urls, error } = await supabase
  //   .from('urls')
  //   .select()
  //   .range(0, 4)
  //   .order('created_at', { ascending: false })
  //   !error ? setData(urls) : alert(error.message)
  //   setCurrentUserId(user.id)
  // }

  const fetchWithFilter = async (user, search) => {
    const { data: urls, error } = await supabase
      .from("urls")
      .select()
      .or(`short_url.ilike.%${search}%,long_url.ilike.%${search}%`)
      .order("created_at", { ascending: false });
    !error ? setData(urls) : alert(error.message);
    setCurrentUserId(user.id);
  };
  // const filterWithoutFetch =()=>{
  //   const newData=data.filter(d=>d.short_url.includes(search) || d.long_url.includes(search))
  // }

  return (
    <div className="sm:mt-18 mx-auto mt-12 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* <!-- Card --> */}
      <div className="flex flex-col">
        <div className="-m-1.5">
          <div className="inline-block w-full p-1.5 align-middle">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900">
              {/* <!-- Header --> */}
              <div className="flex flex-col space-y-3 border-b border-gray-200 px-6 py-4 dark:border-gray-700 md:flex-row md:items-center md:justify-between md:space-y-0">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Kelola Tautan
                </h2>

                <div className="flex flex-row space-x-2 md:space-x-4">
                  <div className="">
                    <label htmlFor="icon" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
                        <svg
                          className="h-4 w-4 flex-shrink-0 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="icon"
                        name="icon"
                        onChange={(e) => doSearch(e)}
                        className="block w-full rounded-lg border border-gray-700 bg-transparent px-4 py-2 pe-20 ps-11 text-sm text-gray-700 shadow-sm placeholder:text-gray-500 focus:border-gray-900 focus:ring-gray-600 md:w-96"
                        placeholder="Cari"
                      />
                    </div>
                  </div>

                  <div className="block ">
                    <button
                      onClick={() => {
                        setOpen(true);
                        setTitle("Buat Url Baru");
                      }}
                      className="flex w-fit items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      Buat
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Header --> */}

              {/* <!-- Table --> */}
              <table className="inline-block w-full divide-y divide-gray-200 overflow-x-auto  dark:divide-gray-700 md:table md:min-w-full">
                <thead className="bg-gray-50 dark:bg-slate-900">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Url singkat
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Url panjang
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Tanggal Dibuat
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-end"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {data &&
                    data.map((row) => (
                      <tr key={row.id}>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="max-w-xs truncate px-6 py-3 hover:overflow-clip hover:text-clip">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              https://visits.id/{row.short_url}
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="max-w-xs truncate px-6 py-3 hover:overflow-clip hover:text-clip">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {row.long_url}
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <div className="max-w-xs truncate px-6 py-3 hover:overflow-clip hover:text-clip">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {formatDate(row.created_at)}
                            </span>
                          </div>
                        </td>
                        <td className="h-px w-px whitespace-nowrap">
                          <Menu as="div" className="px-6 py-1.5">
                            <div className=" inline-block sm:relative">
                              <Menu.Button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 rounded-lg px-2 py-1.5 align-middle text-sm text-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white disabled:pointer-events-none disabled:opacity-50 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                              >
                                <svg
                                  className="h-4 w-4 flex-shrink-0"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="12" r="1" />
                                  <circle cx="19" cy="12" r="1" />
                                  <circle cx="5" cy="12" r="1" />
                                </svg>
                              </Menu.Button>
                              <Transition as={Fragment}>
                                <Menu.Items className="absolute right-10 z-10 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-700 sm:right-0">
                                  <div className="px-1 py-1 ">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          onClick={() => {
                                            setTitle("Edit Url");
                                            setOpen(true);
                                            setCurrentEditData(row.id);
                                            setShortUrl(row.short_url);
                                            setLongUrl(row.long_url);
                                          }}
                                          className={`${active && "bg-blue-200 dark:bg-blue-800"} flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-blue-500 dark:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                                        >
                                          Edit
                                        </button>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          onClick={() => {
                                            setOpenDeleteModal(true);
                                            setCurrentDeleteData(row.id);
                                          }}
                                          className={`${active && "bg-red-200 dark:bg-red-800"} flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm text-gray-800  focus:ring-2 focus:ring-red-500 dark:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                                        >
                                          Hapus
                                        </button>
                                      )}
                                    </Menu.Item>
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </div>
                          </Menu>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {/* <!-- End Table --> */}

              {/* <!-- Footer --> */}
              <div className="grid gap-3 border-t border-gray-200 px-6 py-4 dark:border-gray-700 md:flex md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {data?.length}
                    </span>{" "}
                    results
                  </p>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Prev
                    </button>

                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Next
                      <svg
                        className="h-4 w-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Footer --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Card --> */}
      <FormModal
        open={open}
        setOpen={setOpen}
        title={title}
        currentEditData={currentEditData}
        currentUserId={currentUserId}
        setCurrentEditData={setCurrentEditData}
        shortUrl={shortUrl}
        setShortUrl={setShortUrl}
        longUrl={longUrl}
        setLongUrl={setLongUrl}
      />
      <DeleteModal
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        currentDeleteData={currentDeleteData}
      />
    </div>
  );
}

export default Table;
