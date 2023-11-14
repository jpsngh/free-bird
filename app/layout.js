import { Inter } from 'next/font/google'
import './globals.css'


import { authOptions } from './api/auth/[...nextauth]/options'

import SideMenu from '@/components/SideMenu'
import Provider from '@/lib/Provider'
import Navbar2 from "@/components/Navbar2"
import {getServerSession} from 'next-auth/next'
import Footer from '@/components/Footer'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const session = getServerSession(authOptions);
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <Provider session={session}> 

        <LoginModal></LoginModal>
        <RegisterModal></RegisterModal>
      <Navbar2> </Navbar2>
    
      <SideMenu></SideMenu> 

      
        {children}
       
        <Footer></Footer>
        </Provider></body>
      
    </html>
  )
}
