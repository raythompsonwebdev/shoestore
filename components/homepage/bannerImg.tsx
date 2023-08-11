import Image from 'next/image'
import Link from 'next/link'

const BannerImg = () => {
  return (
    <section id="front-page-banner">
      <hgroup>
        <h1>LORUM IPSUN DOLOR AMET </h1>
        <h2>ipsum vel voluptate perspiciatis, quis</h2>
      </hgroup>

      <nav id="front-page-banner-nav">
        <ul id="banner-nav-items">
          <li className="banner-nav-item">
            <Link
              href="/"
              title="Womens's Shoes"
              className="banner-nav-link"
              aria-label="Womens's Shoes"
            >
              Women&apos;s Shoes
            </Link>
          </li>
          <li className="banner-nav-item">
            <Link
              href="/"
              title="Men's Shoes"
              className="banner-nav-link"
              aria-label="Men's Shoes"
            >
              Men&apos;s Shoes
            </Link>
          </li>
          <li className="banner-nav-item">
            <Link
              href="/"
              title="Kids's Shoes"
              className="banner-nav-link"
              aria-label="Kids's Shoes"
            >
              Kid&apos;s Shoes
            </Link>
          </li>
          <li className="banner-nav-item">
            <Link
              href="/"
              title="Bags"
              className="banner-nav-link"
              aria-label="Bags"
            >
              Bags
            </Link>
          </li>
          <li className="banner-nav-item">
            <Link
              href="/"
              title="Accessories"
              className="banner-nav-link"
              aria-label="Accessories"
            >
              Accessories
            </Link>
          </li>
        </ul>
      </nav>

      <figure id="front-page-banner-img">
        <Image
          src="/images/bannerimage.jpg"
          width="500"
          height="346"
          alt="shoestore-banner"
          priority={true}
        />
      </figure>
    </section>
  )
}

export default BannerImg
