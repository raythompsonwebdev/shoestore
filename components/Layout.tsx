import type { ReactNode } from 'react'
import Header from './(layouts)/header'
import MainNav from './(layouts)/mainNav'
import Footer from './(layouts)/footer'
import { Old_Standard_TT } from 'next/font/google'

const roboto = Old_Standard_TT({
  weight: '400',
  subsets: ['latin'],
})

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div id="wrapper" className={roboto.className}>
      <Header />
      <MainNav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
