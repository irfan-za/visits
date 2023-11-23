"use client"
import supabase from '@/app/api/supabase';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

function Register() {
  const router= useRouter()
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)

  const register= async function(e) {
    e.preventDefault();
    if(e.target.password.value === e.target.confirmPassword.value  && e.target.name.value.length>2 && e.target.email.value.length>=6 && e.target.password.value.length>=6) {
      setNameError(false); setEmailError(false); setPasswordError(false); setConfirmPasswordError(false);

        const { data, error } = await supabase.auth.signUp({
          email: e.target.email.value,
          password: e.target.password.value
        })
        if(!error){
          const { data: users, error } = await supabase
          .from('users')
          .select("*")
          .eq('supabase_auth_id', data.user.id)
          if(users.length>0){
            alert("Email telah digunakan. Silahkan gunakan email lain")
          }
          else{
            const { error } = await supabase
            .from('users')
            .insert([{ 
              name:e.target.name.value,
              supabase_auth_id: data.user.id
            }])
            if(!error) {
              router.replace('/profile')
            }

          }
        }else{
          alert(error.message)
        }


    }else if(e.target.name.value.length<2){
      setNameError(true)
    }if(e.target.email.value.length<6){
      setEmailError(true)
    }if(e.target.password.value.length<6){
      setPasswordError(true)
    }if(e.target.password.value !== e.target.confirmPassword.value){
      setConfirmPasswordError(true)
    }

  };
  return (
    <section className='dark:bg-slate-900 bg-gray-100 flex h-screen items-center py-16'>
       <main className="w-full max-w-md mx-auto p-4">
         <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
           <div className="p-4 sm:p-7">
             <div className="text-center">
               <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Daftar</h1>
               <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                 Sudah memiliki akun?
                 <Link className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/auth/login">
                   Masuk disini.
                 </Link>
               </p>
             </div>

             <div className="mt-5">
               {/* <!-- Form --> */}
               <form onSubmit={register}>
                 <div className="grid gap-y-4">
                   {/* <!-- Form Group --> */}
                   <div>
                     <label for="name" className="block text-sm mb-2 dark:text-white">Nama</label>
                     <div className="relative">
                       <input type="text" id="name" name="name" className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="name-error"/>
                       {
                        nameError &&
                       <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                         <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                         </svg>
                       </div>
                       }
                     </div>
                     {
                      nameError &&
                     <p className="text-xs text-red-600 mt-2" id="name-error">Masukkan namamu.</p>
                     }
                   </div>
                   {/* <!-- End Form Group --> */}

                   {/* <!-- Form Group --> */}
                   <div>
                     <label for="email" className="block text-sm mb-2 dark:text-white">Email</label>
                     <div className="relative">
                       <input type="email" id="email" name="email" className="py-3 px-4 block w-full  border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="email-error"/>
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
                     <p className="text-xs text-red-600 mt-2" id="email-error">Masukkan email yang valid</p>
                     }
                   </div>
                   {/* <!-- End Form Group --> */}

                   {/* <!-- Form Group --> */}
                   <div>
                     <label for="password" className="block text-sm mb-2 dark:text-white">Password</label>
                     <div className="relative">
                       <input type="password" id="password" name="password" className="py-3 px-4 block w-full  border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="passwordError"/>
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
                     <p className="text-xs text-red-600 mt-2" id="passwordError">Password minimal 6 karakter</p>
                     }
                   </div>
                   {/* <!-- End Form Group --> */}

                   {/* <!-- Form Group --> */}
                   <div>
                     <label for="confirmPassword" className="block text-sm mb-2 dark:text-white">Konfirmasi Password</label>
                     <div className="relative">
                       <input type="password" id="confirmPassword" name="confirmPassword" className="py-3 px-4 block w-full  border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="confirmPasswordError"/>
                       {
                        confirmPasswordError &&
                       <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                         <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                         </svg>
                       </div>
                       }
                     </div>
                     {
                      confirmPasswordError &&
                     <p className="text-xs text-red-600 mt-2" id="confirmPasswordError">Password tidak sesuai</p>
                     }
                   </div>
                   {/* <!-- End Form Group --> */}

                   {/* <!-- Checkbox --> */}
                   <div className="flex items-center">
                     <div className="flex">
                       <input id="remember-me" required name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
                     </div>
                     <div className="ms-3">
                       <label for="remember-me" className="text-sm dark:text-white">Saya menyetujui <Link className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/term-condition">Syarat dan Ketentuan</Link></label>
                     </div>
                   </div>
                   {/* <!-- End Checkbox --> */}

                   <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Daftar</button>
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

export default Register