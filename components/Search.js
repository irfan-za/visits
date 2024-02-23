"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function Search() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const doSearch = useDebouncedCallback((term) => {
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 400);

  return (
    <div className="flex flex-row space-x-2 md:space-x-4">
      <label htmlFor="icon" className="sr-only">
        Search
      </label>
      <div className="relative">
        <input
          type="text"
          id="icon"
          name="icon"
          onChange={(e) => doSearch(e.target.value)}
          defaultValue={searchParams.get("search")?.toString()}
          className="block w-full rounded-lg border border-gray-700 bg-transparent px-4 py-2 pe-20 ps-11 text-sm text-gray-700 shadow-sm placeholder:text-gray-500 focus:border-gray-900 focus:ring-gray-600 md:w-96"
          placeholder="Cari"
        />
        <div className="pointer-events-none absolute bottom-1/4 flex items-center ps-4">
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
      </div>
    </div>
  );
}

export default Search;
