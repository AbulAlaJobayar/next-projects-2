import Header from './Component/Header/Header'
import './globals.css'
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
 

export const metadata = {
  title: 'web.v2',
  description: 'next js projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={mulish.className}>
      <Header></Header>
      {children}
      
      </body>
    </html>
  )
}
