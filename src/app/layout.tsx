import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const inter = Montserrat({ subsets: ['latin'] , weight : "400" })

export const metadata: Metadata = {
  title: 'Conversion MEP',
  description: 'You can find everything about Conversion Mep here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div>{children}</div>
        <Toaster/>
        <Footer/>
      </body>
    </html>
  )
}
