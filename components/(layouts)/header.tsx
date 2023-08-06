import Image from 'next/image'
//import Link from 'next/link'

export default function Header() {
  return (
    <header id="site-header">
      <figure id="logo">
        <Image
          src="/images/shoe-store-logo.png"
          width={341}
          height={71}
          alt="shoe-store-logo"
          priority={true} // above the fold image
        />
      </figure>

      {/* <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <Link href="/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </Link>{' '}
      </div> */}
    </header>
  )
}
