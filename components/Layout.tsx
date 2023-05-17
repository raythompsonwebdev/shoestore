import type { ReactNode } from "react";
import Header from "./header";
import MainNav from "./mainNav";
import Footer from "./footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div id="wrapper">
      <Header />
      <MainNav />
      {children}
      <Footer />
    </div>
  );
}
