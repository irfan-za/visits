import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LogoutModal from '../modal/LogoutModal';
import supabase from '../../api/supabase';
import DarkModeToggle from '../DarkModeToggle';
import Image from 'next/image';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [open, setOpen] = useState(false)
  const [currentUserAuth, setCurrentUserAuth] = useState(null)
  const [currentUserName, setCurrentUserName] = useState(null)

  useEffect(() => {
    const f= async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if(user){
        setCurrentUserAuth(user);
        const { data: name, error } = await supabase
          .from('users')
          .select('name')
          .eq('supabase_auth_id', user.id)
          .single()
          if(!error){
            setCurrentUserName(name);
          }
          else{
            alert(error.message)
          }
        }
      }
    f();
  }, [])
  

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white dark:bg-blue-600 border-b border-gray-700 text-sm py-2.5 sm:py-4">
    <nav className="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
      <div className="me-5 md:me-8">
        <Link className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/" aria-label="Brand">Visits</Link>
      </div>

      <div className="flex w-full flex-row items-center justify-end gap-2">
        <DarkModeToggle/>

        <div className="relative inline-flex" data-hs-dropdown-placement="bottom-right">
          <button onClick={()=> setShowDropdown(!showDropdown)} type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600">
            <div className='inline-flex items-center justify-center rounded-full w-9 h-9 bg-gray-700'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </button>
          {
            showDropdown &&
            <div className=" absolute -left-48 top-10 min-w-[13rem] z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-with-header">
              <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                <p className="z text-sm text-gray-500 dark:text-gray-100">{currentUserName?.name}</p>
                <p className="z text-sm font-medium text-gray-800 dark:text-gray-300">{currentUserAuth?.email}</p>
              </div>
              <div className="mt-2 py-2 first:pt-0 last:pb-0">
                <button 
                onClick={()=> setOpen(true)}
                className="flex items-center w-full gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-red-500 hover:text-white focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                  Keluar
                </button>
              </div>
            </div>
          }

        </div>
      </div>
    </nav>

    <LogoutModal open={open} setOpen={setOpen}/>
    </header>
  )
}

export default Navbar