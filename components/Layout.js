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
          <Link href="/">
            <a
              className="inner-nav-link"
              title="Home Page"
              aria-label="Home Page"
            >
              Home
            </a>
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link href="/newproducts">
            <a
              className="inner-nav-link"
              title="new products page"
              aria-label="new products page"
            >
              New Products
            </a>
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link href="/specials">
            <a
              className="inner-nav-link"
              title="specials page"
              aria-label="specials page"
            >
              Specials
            </a>
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link href="/allproducts">
            <a
              className="inner-nav-link"
              title="all products page"
              aria-label="all products page"
            >
              All Products
            </a>
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link href="/faqs">
            <a
              className="inner-nav-link"
              title="faqs page"
              aria-label="faqs page"
            >
              FAQS
            </a>
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link href="/contact">
            <a
              className="inner-nav-link"
              title="contact page"
              aria-label="contact page"
            >
              Contact
            </a>
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
          <Link href="/">
            <a
              title="Home Page"
              className="footer-inner-nav-link"
              aria-label="Home Page"
            >
              Home
            </a>
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link href="/newproducts">
            <a
              title="new products page"
              aria-label="new products page"
              className="footer-inner-nav-link"
            >
              New Products
            </a>
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link href="/specials">
            <a
              title="specials page"
              className="footer-inner-nav-link"
              aria-label="specials page"
            >
              Specials
            </a>
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link href="/allproducts">
            <a
              title="all products page"
              aria-label="all products page"
              className="footer-inner-nav-link"
            >
              All Products
            </a>
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link href="/faqs">
            <a
              title="faqs page"
              className="footer-inner-nav-link"
              aria-label="faqs page"
            >
              FAQS
            </a>
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link href="/contact">
            <a
              title="contact page"
              className="footer-inner-nav-link"
              aria-label="contact page"
            >
              Contact
            </a>
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
