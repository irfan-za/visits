"use client";
import supabase from "@/app/api/supabase";
import React, { useState } from "react";

export default function UpdatePassword() {
  const submit = async (e) => {
    e.preventDefault();
    await supabase.auth.updateUser({ password: e.target.password.value });
  };
  return (
    <section className="flex h-screen items-center bg-gray-100 py-16 dark:bg-slate-900">
      <main className="mx-auto w-full max-w-md p-6">
        <div className=" rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="p-4 sm:p-7">
            <h1 className="block text-center text-2xl font-bold text-gray-800 dark:text-white">
              Buat Password Baru
            </h1>

            <div className="mt-5">
              <form onSubmit={submit}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      for="password"
                      className="mb-2 block text-sm dark:text-white"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="*******"
                        className="block w-full rounded-lg border border-gray-400 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
