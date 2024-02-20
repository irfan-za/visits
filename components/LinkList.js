import { BarChart4, Calendar, Edit, Share, Share2 } from "lucide-react"
import { Button } from "./ui/button"
import supabase from "@/app/api/supabase";

async function LinkList({search, currentPage}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: urls, error } = await supabase
              .from("urls")
              .select()
              .eq("supabase_auth_id", user?.id)
              .order("created_at", { ascending: false });
            !error ? setData(urls) : console.log(error.message);
  if(user){
  }
  console.log(user, urls, error);
  return (
    <div className='border rounded-lg px-4 py-2 bg-white'>
      {
        JSON.stringify(urls)
      }
      <section className="flex justify-between py-4">
        <div>
          <h4 className='text-xl font-semibold text-gray-700 hover:underline'>visits.id/short</h4>
          <p className=' hover:underline text-gray-600'>https://verylongurl.com/url/link</p>
        </div>
        <div className="flex space-x-2">
          <Button><Share2 size={18} className="mr-2"/> Bagikan</Button>
          <Button variant='secondary' ><Edit size={18} className="mr-2"/> Edit</Button>
        </div>
      </section>
      <section className="border-t py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Calendar size={18} color="rgb(107 114 128)" />
          <span className="ml-2 text-gray-500 text-sm">20 Feb 2024 07:51</span>
        </div>
        <Button variant="secondary" >
          <BarChart4 size={18} />
          <span className="ml-2 text-sm">Statistik</span>
        </Button>


      </section>
      
    </div>
  )
}

export default LinkList