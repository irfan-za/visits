import Link from "next/link";

export default function HomeNavbar() {
  return (
    <header className="fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white dark:bg-gray-800 text-sm py-3 sm:py-4 top-0">
      <nav className="relative max-w-[85rem] w-full mx-auto px-4 flex sm:items-center sm:justify-between sm:px-6 lg:px-8" ariaLabel="Global">
          <Link className="flex-none text-xl font-semibold text-blue-500" href="/" ariaLabel="Brand">Visits</Link>

          <div className="inline-flex items-center justify-end grow gap-x-4">
            <Link className="flex items-center font-medium text-white/[.8] hover:text-white border-2 border-blue-500 hover:border-blue-600 hover:bg-blue-600 rounded-md px-2 py-1 sm:px-4 sm:py-1.5" href="/auth/register">
              Daftar
            </Link>
            <span className="border-1.5 border-l border-white h-7 sm:h-9"></span>
            <Link className="flex items-center font-medium text-white/[.8] hover:text-white bg-gradient-to-r bg-blue-500 hover:bg-blue-600 rounded-md px-2 py-1 sm:px-4 sm:py-1.5" href="/auth/login">
              Masuk
            </Link>
          </div>
      </nav>
    </header>
  )
}
