import DesktopNavBar from './components/DesktopNavBar'
import MobileNavbar from './components/MobileNavbar'
import Footer from './components/Footer'
import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Roadhouse Hospitaity Group',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="tm-header">
          <div className="header-desktop"><DesktopNavBar/></div>
          <div className="header-mobile"><MobileNavbar/></div>
        </div>
        
        {children}
        <footer className="">
          <Footer/>
        </footer>
        </body>
    </html>
  )
}
