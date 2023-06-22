import type { ReactNode } from "react";
import Header from "./header";
import MainNav from "./mainNav";
import Footer from "./footer";
import { Old_Standard_TT } from 'next/font/google'

const roboto = Old_Standard_TT({
  weight: '400',
  subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div id="wrapper" className={roboto.className}>
      <Header />
      <MainNav />
      {children}
      <Footer />
    </div>
  );
}
