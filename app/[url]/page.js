"use client"
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Url() {
  const router= useRouter()
  const shortUrl= usePathname()?.slice(1)

  useEffect(() => {
    async function f(){
      try {
        const res=await fetch('/api/redirect',{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({shortUrl})
        })
        const data= await res.json()
        if(data.status===200){
          router.replace(data.longUrl)
        }
        
      } catch (error) {
       alert('Failed to get long url!') 
      }
    }
     f()
  }, [])
  
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
