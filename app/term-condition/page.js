"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import Navbar from "../../components/Navbar";

function TermCondition() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar currentUserAuth={null} currentUserName={null} />
      <div className="container mx-auto mb-10 mt-24 h-full max-w-4xl px-2 sm:px-8">
        <div className="rounded-xl bg-blue-100 p-2 sm:p-4">
          <div className="mb-4 w-full rounded-md bg-blue-500 px-4 py-2 font-medium text-white sm:mb-8 sm:text-xl">
            <h1>Syarat dan Ketentuan</h1>
          </div>
          <div className="px-4 py-2 text-sm sm:text-base">
            <p>Dengan menggunakan Situs, Anda menyatakan bahwa: </p>
            <ol className="mt-2	list-inside list-decimal">
              <li>
                Semua informasi pendaftaran yang Anda kirimkan adalah benar,
                akurat, terkini, dan lengkap.{" "}
              </li>
              <li>
                Anda mempunyai kapasitas hukum dan Anda setuju untuk mematuhi
                Ketentuan Penggunaan ini.
              </li>
              <li>
                Anda tidak akan mengakses Situs melalui cara otomatis atau
                non-manusia, baik melalui bot, skrip, atau lainnya
              </li>
              <li>
                Penggunaan Situs oleh Anda tidak akan melanggar hukum atau
                peraturan apa pun yang berlaku.
              </li>
              <li>
                Anda tidak akan menggunakan Situs untuk tujuan ilegal atau tidak
                sah
              </li>
              <li>
                Anda tidak menampilkan dan/atau menampilkan materi Situs Web apa
                pun secara publik
              </li>
              <li>
                Anda tidak menggunakan Situs Web ini dengan cara apa pun yang
                dapat atau mungkin merusak Situs Web ini
              </li>
              <li>
                Anda tidak akan menggunakan Situs Web ini dengan cara apa pun
                yang memengaruhi akses pengguna ke Situs Web ini
              </li>
            </ol>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default TermCondition;
