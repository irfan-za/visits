"use client"
import Link from "next/link";
import { ThemeProvider } from "next-themes"
import DarkModeTogleButton from "./components/navbar/DarkModeTogleButton";
import Footer from "./components/Footer";
import Card from "./components/Card";

const cardsData=[
  {
    title: "Mudah",
    description: "Mudah dan cepat, masukkan tautan panjang untuk mendapatkan tautan singkat Anda",
    icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
  </svg>,
  },
  {
    title: "URL Singkat",
    description: "Gunakan tautan apa pun, berapa pun ukurannya, Visits selalu dapat diandalkan",
    icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
  ,
  },
  {
    title: "Aman",
    description: "Cepat dan aman, layanan kami menggunakan protokol HTTPS dan enkripsi data",
    icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
  ,
  },
  {
    title: "Statistik",
    description: "Periksa jumlah klik yang diterima URL singkat Anda",
    icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
  </svg>
  ,
  },
  {
    title: "Responsif",
    description: "Dapat digunakan pada smartphone, tablet, dan desktop",
    icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
  ,
  },
  {
    title: "Mudah Diingat",
    description: "Gunakan URL singkat dan nikmati kemudahan untuk diingat.",
    icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
  ,
  },
]
export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <DarkModeTogleButton/>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-cyan-600 dark:text-cyan-500">
              Visits.id
            </h1>

            <p className="mt-3 text-gray-600 dark:text-gray-400 font-bold text-lg sm:text-xl">
              Tempelkan link URL yang ingin disingkat.
            </p>

            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              <form>
                <div className="relative z-10 flex space-x-3 p-3 bg-gray-400 border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                  <div className="flex-[100%]">
                    <label htmlFor="hs-search-article-1" className="block text-sm text-gray-700 font-medium dark:text-white"><span className="sr-only">Search article</span></label>
                    <input type="email" name="hs-search-article-1" id="hs-search-article-1" className="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 bg-gray-400 text-gray-700 dark:text-gray-400" placeholder="Masukkan link disini"/>
                  </div>
                  <div className="flex-[0_0_auto]">
                    <Link className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                      </svg>
                      <p>Singkatkan</p>
                    </Link>
                  </div>
                </div>
              </form>

              <div className="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-20">
                <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                  <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                  <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32">
                <svg className="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-3">
              <p className="font-semibold text-gray-700 dark:text-gray-400 sm:text-lg">
                Url singkat : <Link className="text-cyan-500 underline" href={'https://google.com'}>http://visits.id/joji1</Link>
              </p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-cyan-500 hover:cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>

            </div>
          </div>
        </div>
      </div>

      <div class="my-10 sm:my-18 sm:mb-20">
          <h3 class="text-blue-500 text-lg sm:text-3xl font-bold text-center">Visits, Penyingkat tautan terbaik dan gratis!</h3>
          <p class="text-base sm:text-xl mx-auto text-gray-700 dark:text-gray-400 max-w-3xl">
              Persingkat tautan anda dengan <strong class="text-blue-500">Visits</strong>. Nikmati kemudahan dan fleksibilitas dalam mengakses tautan singkat secara gratis, kapan saja dan di mana saja. Anda dapat mempersingkat tautan dari Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blog dan situs. Cukup tempelkan URL yang panjang dan klik tombol Persingkat URL. Di halaman berikutnya, salin URL yang dipersingkat dan gunakan sesuai kebutuhan. Setelah memperpendek URL, periksa berapa banyak klik yang diterimanya.
          </p>
      </div>

      <div className=" max-w-3xl grid grid-cols-3 gap-4 mx-auto">
        {
          cardsData.map((card, index) =>
          <Card key={index} title={card.title} description={card.description} icon={card.icon}/>
          )
        }
      </div>
      <Footer/>
      
    </ThemeProvider>
  )
}
