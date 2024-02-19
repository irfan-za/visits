"use client";
import supabase from "@/app/api/supabase";
import SuccessForgotPassword from "@/app/components/modal/SuccessForgotPasswordModal";
import React, { useState } from "react";

function ForgotPassword() {
  const [open, setOpen] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setOpen(true);
    await supabase.auth.resetPasswordForEmail(e.target.email.value, {
      redirectTo: "https://visits.id/auth/update-password",
    });
  };
  return (
    <section className="flex h-screen items-center bg-gray-100 py-16 dark:bg-slate-900">
      <main className="mx-auto w-full max-w-md p-6">
        <div className=" rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Lupa Password?
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Ingat passwordmu?
                <a
                  className="font-medium text-blue-600 decoration-2 hover:underline dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="../examples/html/signin.html"
                >
                  Masuk disini
                </a>
              </p>
            </div>

            <div className="mt-5">
              {/* <!-- Form --> */}
              <form onSubmit={submit}>
                <div className="grid gap-y-4">
                  {/* <!-- Form Group --> */}
                  <div>
                    <label
                      for="email"
                      className="mb-2 block text-sm dark:text-white"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full rounded-lg border border-gray-400 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>
                  {/* <!-- End Form Group --> */}

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Reset password
                  </button>
                </div>
              </form>
              {/* <!-- End Form --> */}
              <SuccessForgotPassword open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default ForgotPassword;
