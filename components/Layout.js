import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header id="site-header">
      <figure id="logo">
        <Image
          src="/images/shoe-store-logo.png"
          width={341}
          height={71}
          alt="shoe-store-logo"
        />
      </figure>
    </header>
  );
}
function MainNav() {
  return (
    <nav id="main-nav" role="navigation">
      <ul id="inner-nav">
        <li className="inner-nav-item">
          <Link
            href="/"
            className="inner-nav-link"
            title="Home Page"
            aria-label="Home Page"
          >
            Home
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link
            href="/newproducts"
            className="inner-nav-link"
            title="new products page"
            aria-label="new products page"
          >
            New Products
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link
            href="/specials"
            className="inner-nav-link"
            title="specials page"
            aria-label="specials page"
          >
            Specials
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link
            href="/allproducts"
            className="inner-nav-link"
            title="all products page"
            aria-label="all products page"
          >
            All Products
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link
            href="/faqs"
            className="inner-nav-link"
            title="faqs page"
            aria-label="faqs page"
          >
            FAQS
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link
            href="/contact"
            className="inner-nav-link"
            title="contact page"
            aria-label="contact page"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
function Footer() {
  return (
    <footer className="footer-nav">
      <ul className="footer-inner-nav">
        <li className="footer-inner-nav-item">
          <Link
            href="/"
            title="Home Page"
            className="footer-inner-nav-link"
            aria-label="Home Page"
          >
            Home
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link
            href="/newproducts"
            title="new products page"
            aria-label="new products page"
            className="footer-inner-nav-link"
          >
            New Products
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link
            href="/specials"
            title="specials page"
            className="footer-inner-nav-link"
            aria-label="specials page"
          >
            Specials
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link
            href="/allproducts"
            title="all products page"
            aria-label="all products page"
            className="footer-inner-nav-link"
          >
            All Products
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link
            href="/faqs"
            title="faqs page"
            className="footer-inner-nav-link"
            aria-label="faqs page"
          >
            FAQS
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link
            href="/contact"
            title="contact page"
            className="footer-inner-nav-link"
            aria-label="contact page"
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <div id="wrapper">
      <Header />
      <MainNav />
      {children}
      <Footer />
    </div>
  );
}
