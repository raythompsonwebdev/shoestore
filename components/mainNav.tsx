import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function MainNav() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

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
        {loading ? <>Loading...</> : false}

        {!session && (
          <>
            {/* <Link
              href={`/api/auth/signin`}
              className="signin-box-link"
              title=""
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Login
            </Link> */}
            <Link href="/profile" className="signin-box-link" title="">
              Account
            </Link>
            <Link href="/cart" className="signin-box-link" title="">
              Cart
            </Link>
          </>
        )}
        {session?.user && (
          <>
            <Link
              href={`/api/auth/signout`}
              className="signin-box-link"
              title=""
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Log Out
            </Link>
            <Link href="/profile" className="signin-box-link" title="">
              Account
            </Link>
            <Link href="/cart" className="signin-box-link" title="">
              Cart
            </Link>
          </>
        )}
      </span>

      <button id="menu-toggle-btn" type="button" onClick={toggleVisibility}>
        MENU
      </button>
    </nav>
  );
}
