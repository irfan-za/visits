"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'
import Navbar from '../components/Navbar'

function TermCondition() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar currentUserAuth={null} currentUserName={null} />
      <div className='mt-24 mb-10 container mx-auto px-2 sm:px-8 max-w-4xl h-full'>
        <div className='bg-blue-100 rounded-xl p-2 sm:p-4'>
          <div className='w-full bg-blue-500 rounded-md py-2 px-4 font-medium text-white sm:text-xl mb-4 sm:mb-8'>
            <h1>Syarat dan Ketentuan</h1>
          </div>
          <div className='py-2 px-4 text-sm sm:text-base'>
            <p>Dengan menggunakan Situs, Anda menyatakan bahwa: </p>
            <ol className='list-decimal	list-inside mt-2'>
              <li>Semua informasi pendaftaran yang Anda kirimkan adalah benar, akurat, terkini, dan lengkap. </li>
              <li>Anda mempunyai kapasitas hukum dan Anda setuju untuk mematuhi Ketentuan Penggunaan ini.</li>
              <li>Anda tidak akan mengakses Situs melalui cara otomatis atau non-manusia, baik melalui bot, skrip, atau lainnya</li>
              <li>Penggunaan Situs oleh Anda tidak akan melanggar hukum atau peraturan apa pun yang berlaku.</li>
              <li>Anda tidak akan menggunakan Situs untuk tujuan ilegal atau tidak sah</li>
              <li>Anda tidak menampilkan dan/atau menampilkan materi Situs Web apa pun secara publik</li>
              <li>Anda tidak menggunakan Situs Web ini dengan cara apa pun yang dapat atau mungkin merusak Situs Web ini</li>
              <li>Anda tidak akan menggunakan Situs Web ini dengan cara apa pun yang memengaruhi akses pengguna ke Situs Web ini</li>
            </ol>
          </div>

        </div>
      </div>
    </ThemeProvider>
  )
}

export default TermCondition