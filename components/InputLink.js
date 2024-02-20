import { createShortLink } from "@/app/server/actions";
import Link from "next/link";

function InputLink() {
  return (
    <form action={createShortLink}>
      <div className="relative z-10 flex max-w-xl space-x-3 rounded-lg border border-gray-400 bg-white p-3 shadow-lg shadow-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/[.2]">
        <div className="flex-[100%]">
          <label
            htmlFor="long_url"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          ></label>
          <input
            type="text"
            name="long_url"
            id="long_url"
            className="block w-full rounded-md border-transparent bg-white p-3 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
            placeholder="Masukkan link disini"
          />
        </div>
        <button
          type="submit"
          className="flex items-center text-sm md:text-base"
        >
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 p-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 sm:p-4"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <p>Singkatkan</p>
          </Link>
        </button>
      </div>
    </form>
  );
}

export default InputLink;
