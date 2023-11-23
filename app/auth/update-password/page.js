'use client'
import supabase from '@/app/api/supabase';
import React, { useState } from 'react'

export default function UpdatePassword() {
  const submit=async(e)=>{
    e.preventDefault();
    await supabase.auth.updateUser({ password: e.target.password.value })
  }
  return (
    <section className="dark:bg-slate-900 bg-gray-100 flex h-screen items-center py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div className=" bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
          <h1 className="block text-2xl text-center font-bold text-gray-800 dark:text-white">Buat Password Baru</h1>

            <div className="mt-5">
              <form onSubmit={submit}>
                <div className="grid gap-y-4">
                  <div>
                    <label for="password" className="block text-sm mb-2 dark:text-white">Password</label>
                    <div className="relative">
                      <input type="password" id="password" name="password" 
                      placeholder='*******'
                      className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required/>
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Simpan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
