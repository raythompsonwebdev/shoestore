import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

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

      {/* <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div> */}
    </header>
  );
}
function MainNav() {
  const { user, error, isLoading } = useUser();

  const [visibility, setVisibility] = useState<boolean>(false);

  const toggleVisibility = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setVisibility(!visibility);
  };

  const menuToggleFunc = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setVisibility(!visibility);
  };

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
      <ul id="" className={`mobile-nav ${visibility ? "is-expanded" : " "}`}>
        <li className="mobile-nav-item">
          <Link
            className="mobile-nav-link"
            href="/"
            title="Home Page"
            aria-label="Home Page"
            onMouseUp={menuToggleFunc}
          >
            Home
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link
            className="mobile-nav-link"
            href="/newproducts"
            title="new products page"
            aria-label="new products page"
            onMouseUp={menuToggleFunc}
          >
            New Products
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link
            className="mobile-nav-link"
            href="/specials"
            title="specials page"
            aria-label="specials page"
            onMouseUp={menuToggleFunc}
          >
            Specials
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link
            className="mobile-nav-link"
            href="/allproducts"
            title="all products page"
            aria-label="all products page"
            onMouseUp={menuToggleFunc}
          >
            All Products
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link
            className="mobile-nav-link"
            href="/faqs"
            title="faqs page"
            aria-label="faqs page"
            onMouseUp={menuToggleFunc}
          >
            FAQS
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link
            className="mobile-nav-link"
            href="/contact"
            title="contact page"
            aria-label="contact page"
            onMouseUp={menuToggleFunc}
          >
            Contact
          </Link>
        </li>
      </ul>
      <span id="signin-box">
        {isLoading ? <>Loading...</> : false}
        {user ? (
          <>
            {/*eslint-disable-next-line @next/next/no-html-link-for-pages*/}
            <a href="/api/auth/logout" className="signin-box-link" title="">
              Logout
            </a>
            {/*eslint-disable-next-line @next/next/no-html-link-for-pages*/}
            <a href="/profile" className="signin-box-link" title="">
              Profile
            </a>
            {/*eslint-disable-next-line @next/next/no-html-link-for-pages*/}
            <a href="/cart" className="signin-box-link" title="">
              Cart
            </a>
          </>
        ) : (
          <>
            {/*eslint-disable-next-line @next/next/no-html-link-for-pages*/}
            <a href="/api/auth/login" className="signin-box-link" title="">
              sign In
            </a>
            {/*eslint-disable-next-line @next/next/no-html-link-for-pages*/}
            <a href="/profile" className="signin-box-link" title="">
              account
            </a>
            <a href="/help" className="signin-box-link" title="">
              help
            </a>
          </>
        )}
      </span>

      <button id="menu-toggle-btn" type="button" onClick={toggleVisibility}>
        MENU
      </button>
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

export default function Layout({ children }: any) {
  return (
    <div id="wrapper">
      <Header />
      <MainNav />
      {children}
      <Footer />
    </div>
  );
}
