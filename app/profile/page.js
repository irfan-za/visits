"use client"
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'
import Table from '../components/profile/Table'
import { useEffect, useState } from 'react'
import supabase from '../api/supabase'

function Profile() {
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
    <ThemeProvider enableSystem={true} attribute="class">
        <Navbar currentUserAuth={currentUserAuth} currentUserName={currentUserName} />
        <Table/>
      </ThemeProvider>
  )
}

export default Profile