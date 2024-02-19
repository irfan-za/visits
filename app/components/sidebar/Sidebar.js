"use client";
import { cn } from "@/lib/utils";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-200 bg-gray-100 lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="flex-none text-xl font-semibold text-blue-500"
          onClick={close}
          aria-label="Brand"
        >
          Visits
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="block w-6 text-gray-400" />
        ) : (
          <AlignJustify className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={cn("flex overflow-y-auto bg-gray-100 lg:static lg:block", {
          "fixed bottom-0 top-14 mt-px w-screen lg:w-full": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="w-1/2 space-y-6 px-2 pb-24 pt-5">
          <div>
            <div className="mb-2 flex space-x-4 border-b border-gray-300 p-4 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
              <div className="aspect-square w-12 rounded-full bg-green-500"></div>
              <div className="flex flex-col">
                <p className="text-lg font-semibold capitalize text-gray-700">
                  Muhammad Irfan
                </p>
                <span class="inline-flex w-fit items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium lowercase text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  User
                </span>
              </div>
            </div>

            <div className="space-y-1">link</div>
          </div>
        </nav>
        <span
          onClick={() => setIsOpen(false)}
          className="h-full w-1/2 bg-black bg-opacity-10"
        ></span>
      </div>
    </div>
  );
};

export default Sidebar;
