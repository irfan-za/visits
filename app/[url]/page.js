"use client"
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import supabase from '../api/supabase'

export default function Url() {
  const router= useRouter()
  const shortUrl= usePathname()?.slice(1)
  const [data, setData] = useState(null)

  useEffect(() => {
    async function f(){
      const { data:d, error } = await supabase
      .from('urls')
      .select('long_url')
      .eq('short_url', shortUrl)
      .single();
      setData(d)
    }
     f()
  }, [])
  

  if(data){
    router.replace(data.long_url)
  }
  return (
  <div className="w-full h-screen flex flex-col space-y-4 items-center justify-center">
    <div
      className="animate-spin w-16 h-16">
      <div className="h-full w-full border-8 border-t-cyan-500
       border-b-sky-700 rounded-[50%]">
      </div>
    </div>
    <span className='text-sky-700 font-semibold text-xl'>Loading...</span>

  </div>
  )
}
