import { Inter } from 'next/font/google'
import './globals.css'
export const dynamic = 'force-dynamic'
import { ClerkProvider } from '@clerk/nextjs'

import { EdgeStoreProvider } from '../lib/edgestore';

import SideMenu from '@/components/SideMenu';

import Navbar2 from '../components/Navbar2';
import Footer from '@/components/Footer';

import RegisterModal from 'components/modals/RegisterModal';
import Loading from './loading';
import AntModal from '@/components/modals/AntModal'
import EditModal from '@/components/modals/EditModal'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
     
      <body className={inter.className}>
       
        <ClerkProvider> 
        <EdgeStoreProvider>
    <EditModal></EditModal>
        <RegisterModal></RegisterModal>
      <Navbar2> 
    
      </Navbar2>

      <SideMenu></SideMenu> 

      
        {children}
      
       
        <Footer></Footer>
        </EdgeStoreProvider>
        </ClerkProvider>
       </body>
      
    </html>
  )
}
