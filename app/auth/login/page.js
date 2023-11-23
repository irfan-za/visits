'use client'
import supabase from '@/app/api/supabase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Login() {
  const router= useRouter()
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const doLogin= async function(e) {
    e.preventDefault();
    if( e.target.email.value.length>=6 && e.target.password.value.length>=6) {
      setEmailError(false); setPasswordError(false);

        const { data, error } = await supabase.auth.signInWithPassword({
          email: e.target.email.value,
          password: e.target.password.value
        })
        if(!error){
          router.replace('/profile')
        }else{
          if(error.message==='Invalid login credentials'){
            alert("Email atau Password salah!")
          }
          else if(error.message==='Email not confirmed'){
            alert("Email belum dikonfirmasi. Silahkan konfirmasi email Anda!")
          }
        }


    }if(e.target.email.value.length<6){
      setEmailError(true)
    }if(e.target.password.value.length<6){
      setPasswordError(true)
    }

  };
  return (
    <section className="dark:bg-slate-900 bg-gray-100 flex h-screen items-center py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Masuk</h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Belum memiliki akun?
                <Link className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/auth/register">
                  Daftar disini.
                </Link>
              </p>
            </div>

            <div className="mt-5">
              {/* <!-- Form --> */}
              <form onSubmit={doLogin}>
                <div className="grid gap-y-4">
                  {/* <!-- Form Group --> */}
                  <div>
                    <label for="email" className="block text-sm mb-2 dark:text-white">Email</label>
                    <div className="relative">
                      <input type="email" id="email" name="email" className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error"/>
                      {
                        emailError &&
                        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                          <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                          </svg>
                        </div>
                      }
                    </div>
                    {
                      emailError &&
                      <p className= "error= "error="text-xs text-red-600 mt-2" id="email-error">Masukkan email yang valid</p>
                    }
                  </div>
                  {/* <!-- End Form Group --> */}

                  {/* <!-- Form Group --> */}
                  <div>
                    <div className="flex justify-between items-center">
                      <label for="password" className="block text-sm mb-2 dark:text-white">Password</label>
                      <Link className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/auth/forgot-password">Lupa password?</Link>
                    </div>
                    <div className="relative">
                      <input type="password" id="password" name="password" className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="password-error"/>
                      {
                        passwordError && 
                        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                          <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                          </svg>
                        </div>
                      }
                    </div>
                    {
                      passwordError && 
                      <p className="text-xs text-red-600 mt-2" id="password-error">Password minimal 6 karakter</p>
                    }
                  </div>
                  {/* <!-- End Form Group --> */}

                  {/* <!-- Checkbox --> */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                    </div>
                    <div className="ms-3">
                      <label for="remember-me" className="text-sm dark:text-white">Ingat saya</label>
                    </div>
                  </div>
                  {/* <!-- End Checkbox --> */}

                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Masuk</button>
                </div>
              </form>
              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Login