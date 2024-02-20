'use client'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { AlignJustify, AreaChart, LayoutDashboard, LinkIcon, ScrollText, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
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
        <nav className="w-3/4 space-y-6 px-2 pb-24 pt-5 sm:w-1/2 lg:w-full">
          <div className="mb-2 flex space-x-4 border-b border-gray-300 p-4 tracking-wider text-gray-400/80">
            <div className="h-10 w-10 rounded-full bg-green-500 sm:h-12 sm:w-12"></div>
            <div className="flex flex-col">
              <p className="font-semibold capitalize text-gray-700 sm:text-lg">
                Muhammad Irfan
              </p>
              <span className="inline-flex w-fit items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium lowercase text-blue-700 ring-1 ring-inset ring-blue-700/10">
                User
              </span>
            </div>
          </div>

          <div className="space-y-1 p-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <LayoutDashboard />
                      <span>Dashboard</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/dashboard/analytics" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <AreaChart/>
                      <span>Analitik</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/dashboard/links" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <LinkIcon/>
                      <span>Tautan</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/dashboard/microsite" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <ScrollText/>
                      <span>Microsite</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>
        <span
          onClick={() => setIsOpen(false)}
          className="h-full w-1/4 sm:w-1/2 bg-black bg-opacity-20"
        ></span>
      </div>
    </div>
  );
};

export default Sidebar;
