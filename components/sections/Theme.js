import React from "react";
import NextPrevButton from "../NextPrevButton";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import useStore from "@/store/useStore";
import { cn } from "@/lib/utils";

function Theme() {
  const { theme, setTheme } = useStore((state) => state);
  const themes = [
    {
      name: "basic",
      image:
        "https://images.pexels.com/photos/18509324/pexels-photo-18509324/free-photo-of-bunga-bunga-kembang-kilang-tanaman.jpeg",
    },
    {
      name: "portfolio",
      image:
        "https://images.pexels.com/photos/18509324/pexels-photo-18509324/free-photo-of-bunga-bunga-kembang-kilang-tanaman.jpeg",
    },
  ];
  return (
    <div className="ml-12">
      <div className="grid min-h-[200px] w-fit grid-cols-2 gap-2 rounded-lg bg-gray-200 p-2 md:grid-cols-3">
        {themes.map((themeItem) => (
          <button
            key={themeItem.name}
            onClick={() => setTheme(themeItem.name)}
            className={cn(
              "h-fit rounded-lg transition-all focus:ring-2 focus:ring-primary",
              { "ring-2 ring-primary": theme === themeItem.name },
            )}
          >
            <Card className="h-32 w-32 cursor-pointer">
              <CardContent className="relative h-24">
                <Image
                  src={themeItem.image}
                  alt="image basic"
                  fill={true}
                  objectFit="cover"
                  className="rounded-t-md"
                />
              </CardContent>
              <CardFooter>
                <span className="mx-auto mt-1 text-sm capitalize">
                  {themeItem.name}
                </span>
              </CardFooter>
            </Card>
          </button>
        ))}
      </div>
      <NextPrevButton
        validCurrentValue={theme !== ""}
        errorMessage={"Silahkan pilih tema dahulu"}
      />
    </div>
  );
}

export default Theme;
