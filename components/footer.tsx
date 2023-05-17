import Link from "next/link";

export default function Footer() {
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
