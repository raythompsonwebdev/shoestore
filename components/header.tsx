import Image from "next/image";

export default function Header() {
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
      </div> */}
    </header>
  );
}
