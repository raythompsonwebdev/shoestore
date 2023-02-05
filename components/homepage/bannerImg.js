import Image from "next/image";

function BannerImg(props) {
  // const { banner } = { ...props };
  return (
    <section id="front-page-banner">
      <hgroup>
        <h1>LORUM IPSUN DOLOR AMET </h1>
        <h2>ipsum vel voluptate perspiciatis, quis</h2>
      </hgroup>

      <nav id="front-page-banner-nav">
        <ul id="banner-nav-items">
          <li className="banner-nav-item">
            <a
              href="/"
              title="Womens's Shoes"
              className="banner-nav-link"
              aria-label="Womens's Shoes"
            >
              Women&apos;s Shoes
            </a>
          </li>
          <li className="banner-nav-item">
            <a
              href="/"
              title="Men's Shoes"
              className="banner-nav-link"
              aria-label="Men's Shoes"
            >
              Men&apos;s Shoes
            </a>
          </li>
          <li className="banner-nav-item">
            <a
              href="/"
              title="Kids's Shoes"
              className="banner-nav-link"
              aria-label="Kids's Shoes"
            >
              Kid&apos;s Shoes
            </a>
          </li>
          <li className="banner-nav-item">
            <a
              href="/"
              title="Bags"
              className="banner-nav-link"
              aria-label="Bags"
            >
              Bags
            </a>
          </li>
          <li className="banner-nav-item">
            <a
              href="/"
              title="Accessories"
              className="banner-nav-link"
              aria-label="Accessories"
            >
              Accessories
            </a>
          </li>
        </ul>
      </nav>

      <figure id="front-page-banner-img">
        {/* <img src={banner} alt="shoestore-banner" /> */}
        <Image
          src="/images/bannerimage.jpg"
          width={500}
          height={346}
          alt="shoestore-banner"
        />
      </figure>
    </section>
  );
}

export default BannerImg;
