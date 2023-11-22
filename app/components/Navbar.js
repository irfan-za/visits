import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function HomeNavbar() {
  return (
    <header className="fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-100 dark:bg-gray-800 drop-shadow-lg text-sm sm:text-base py-3 sm:py-4 top-0">
      <nav className="relative max-w-[85rem] w-full mx-auto px-4 flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <Link className="flex-none text-xl font-semibold text-blue-500" href="/" aria-label="Brand">Visits</Link>

          <div className="inline-flex items-center justify-end grow gap-x-4">
            <DarkModeToggle/>
            <Link className="flex items-center font-medium text-white bg-gradient-to-r bg-blue-500 hover:bg-blue-600 rounded-full px-2 py-1 sm:px-4 sm:py-1.5" href="/auth/login">
              Masuk / Daftar
            </Link>
          </div>
      </nav>
    </header>
  )
}
