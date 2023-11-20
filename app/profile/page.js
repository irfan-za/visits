"use client"
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/profile/Navbar'
import Table from '../components/profile/Table'

function Profile() {

  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <Navbar/>
        <Table/>
      </ThemeProvider>
  )
}

export default Profile