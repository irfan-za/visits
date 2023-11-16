'use client'
import React, { Fragment, useEffect, useState } from 'react'
import FormModal from './FormModal'
import { Menu, Transition } from '@headlessui/react'
import supabase from '../api/supabase'

function Table() {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [data, setData] = useState(null)
  const [currentEditData, setCurrentEditData] = useState(null)


  useEffect(() => {
    const f= async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if(user){
        const { data: urls, error } = await supabase
        .from('urls')
        .select()
        .eq('supabase_auth_id', user.id)
        !error ? setData(urls) : alert(error.message)
      }
    }
    f()
  },[])
  console.log('data table =>',data);


  return (
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Card --> */}
  <div className="flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
          {/* <!-- Header --> */}
          <div className="px-6 py-4 flex flex-col md:flex-row space-y-3 md:space-y-0 md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Kelola Tautan
            </h2>

            <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4">
              <div className="w-full">
                <label for="icon" className="sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <svg className="flex-shrink-0 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </div>
                  <input type="text" id="icon" name="icon" className="py-2 px-4 ps-11 pe-20 block w-92 md:w-96 bg-transparent border border-gray-700 shadow-sm rounded-lg text-sm text-gray-700 focus:border-gray-900 focus:ring-gray-600 placeholder:text-gray-500" placeholder="Cari"/>      
                </div>
              </div>
              
              <button
              onClick={()=>{setOpen(true); setTitle("Buat Url Baru")}}
               className="max-w-[70%] py-2 px-3 inline-flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                Buat
              </button>
            </div>
          </div>
          {/* <!-- End Header --> */}

          {/* <!-- Table --> */}
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-slate-900">
              <tr>
                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Url singkat
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Url panjang
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                      Tanggal Dibuat
                    </span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-end"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {
                data && data.map(row=>
               <tr key={row.id}>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{row.short_url}</span>
                  </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{row.long_url}</span>
                  </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{row.created_at}</span>
                  </div>
                </td>
                <td className="h-px w-px whitespace-nowrap">
                  <Menu as="div" className="px-6 py-1.5">
                    <div className=" relative inline-block">
                      <Menu.Button type="button" className="py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                      </Menu.Button>
                      <Transition as={Fragment}>
                        <Menu.Items  className="absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                          {({ active }) => (
                            <button 
                            onClick={()=>{setTitle("Edit Url"); setOpen(true); setCurrentEditData(data.id)}}
                            className={`${active && 'bg-blue-200'} flex items-center justify-center w-full py-2 px-3 rounded-lg text-sm text-gray-800 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}>
                              Edit
                            </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                          {({ active }) => (
                            <button className={`${active && 'bg-red-200'} flex items-center justify-center w-full py-2 px-3 rounded-lg text-sm text-gray-800  focus:ring-2 focus:ring-red-500 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}>
                              Hapus
                            </button>
                            )}
                          </Menu.Item>
                        </div>
                        </Menu.Items>
                      </Transition>
                    </div>
                  </Menu>
                </td>
              </tr>

                  )
              }

            </tbody>
          </table>
          {/* <!-- End Table --> */}

          {/* <!-- Footer --> */}
          <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-800 dark:text-gray-200">6</span> results
              </p>
            </div>

            <div>
              <div className="inline-flex gap-x-2">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  Prev
                </button>

                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Next
                  <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- End Footer --> */}
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End Card --> */}
  <FormModal open={open} setOpen={setOpen} title={title} currentEditData={currentEditData}/>
</div>
  )
}

export default Table