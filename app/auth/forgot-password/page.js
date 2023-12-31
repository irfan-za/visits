'use client'
import supabase from '@/app/api/supabase';
import SuccessForgotPassword from '@/app/components/modal/SuccessForgotPasswordModal';
import React, { useState } from 'react'

function ForgotPassword() {
  const [open, setOpen] = useState(false);
  const submit=async(e)=>{
    e.preventDefault();
    setOpen(true);
    await supabase.auth.resetPasswordForEmail(e.target.email.value, {
      redirectTo: 'https://visits.id/auth/update-password',
    })
  }
  return (
    <section className="dark:bg-slate-900 bg-gray-100 flex h-screen items-center py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div className=" bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Lupa Password?</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Ingat passwordmu?
                <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/signin.html">
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
                    <label for="email" className="block text-sm mb-2 dark:text-white">Email</label>
                    <div className="relative">
                      <input type="email" id="email" name="email" className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error"/>
                    </div>
                  </div>
                  {/* <!-- End Form Group --> */}

                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Reset password</button>
                </div>
              </form>
              {/* <!-- End Form --> */}
              <SuccessForgotPassword open={open} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default ForgotPassword