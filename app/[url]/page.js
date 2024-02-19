"use client";
import { useRouter, usePathname, notFound } from "next/navigation";
import { useEffect } from "react";

export default function Url() {
  const router = useRouter();
  const shortUrl = usePathname()?.slice(1);

  useEffect(() => {
    async function f() {
      try {
        const res = await fetch("/api/redirect", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ shortUrl }),
        });
        const data = await res.json();
        if (data.status === 200) {
          router.replace(data.longUrl);
        }
      } catch (error) {
        // notFound()
        alert("Failed to fetch!");
      }
    }
    f();
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-4">
      <div className="h-16 w-16 animate-spin">
        <div
          className="h-full w-full rounded-[50%] border-8
       border-b-sky-700 border-t-cyan-500"
        ></div>
      </div>
      <span className="text-xl font-semibold text-sky-700">Loading...</span>
    </div>
  );
}
