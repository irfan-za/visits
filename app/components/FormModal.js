import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import supabase from '../api/supabase'
import Link from 'next/link'

export default function FormModal({open,setOpen, title, currentEditData}) {
  const [longUrlError, setLongUrlError] = useState(false)
  const cancelButtonRef = useRef(null)
  const submitForm= async()=>{
    e.preventDefault()
    console.log(e.target.short_url);
    console.log(e.target.long_url);
    if(currentEditData){

    }else{
      editUrl()
    }
  }
  const editUrl=async()=>{
  //   const { data, error } = await supabase
  //   .from('urls')
  //   .update({ 
  //     short_url: 'shorturl',
  //     long_url: 'longurl',
  //  })
  //   .eq('id', currentEditData)
  //   .select()
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900 text-center mb-2 w-full">
                    {title}
                  </Dialog.Title>
                  <form onSubmit={submitForm}>
                    <div className="grid gap-y-4">
                      <div>
                        <label for="longUrl" className="block text-sm mb-2 dark:text-white">Url Panjang</label>
                        <div className="relative">
                          <input type="text" id="longUrl" name="longUrl" className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" required aria-describedby="longUrl-error"
                            placeholder='https://example.com/123/abc'/>
                          {
                            longUrlError &&
                            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                              <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                              </svg>
                            </div>
                          }
                        </div>
                        {
                          longUrlError &&
                          <p className= "error= "error="text-xs text-red-600 mt-2" id="longUrl-error">Masukkan tautan Url</p>
                        }
                      </div>
                      <div>
                        <label for="customUrl" className="block text-sm mb-2 dark:text-white">Url Kustom</label>
                        <input type="text" id="customUrl" name="customUrl" 
                          placeholder='visits.id/p/hello'
                          className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" aria-describedby="customUrl-error"/>
                      </div>
                      
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                        >
                          Simpan
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => {setOpen(false); signout()}}
                          ref={cancelButtonRef}
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  </form>

                 
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
