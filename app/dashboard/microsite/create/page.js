"use client";
import Step from "@/components/Step";
import MicrositeInfo from "@/components/sections/MicrositeInfo";
import Theme from "@/components/sections/Theme";
import Type from "@/components/sections/Type";
import { Toaster } from "@/components/ui/toaster";
import useStore from "@/store/useStore";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { step } = useStore((state) => state);
  return (
    <div className="mt-24 lg:mt-0">
      <div className="flex items-center justify-start border-b p-4">
        <Link href={"/dashboard/microsite"}>
          <ArrowLeft className="mr-2 h-6 w-6" />
        </Link>
        <span>Microsite</span>
      </div>
      <section className="mt-2 flex space-x-3 p-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Buat Microsite Baru
          </h3>
          <p className="text-xs text-gray-600">
            Silahkan masukan beberapa informasi di bawah ini untuk menyelesaikan
            instalasi Microsite baru kamu.
          </p>
          <Step stepNumber={1} sectionTitle="Tentukan jenis microsite mu" />
          {step === 1 && <Type />}
          <Step stepNumber={2} sectionTitle="Pilih tema" />
          {step === 2 && <Theme />}
          <Step stepNumber={3} sectionTitle="Pilih nama" />
          {step === 3 && <MicrositeInfo />}
        </div>
        <div className="hidden w-1/2 border border-red-600 sm:block">right</div>
      </section>
      <Toaster />
    </div>
  );
}

export default page;
