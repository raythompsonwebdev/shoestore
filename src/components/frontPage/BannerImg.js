import React from "react";

function BannerImg(props) {
  const { banner } = { ...props };
  return (
    <section id="bannerbox">
      <hgroup>
        <h1>LORUM IPSUN DOLOR AMET </h1>
        <h2>ipsum vel voluptate perspiciatis, quis</h2>
      </hgroup>

      <nav id="apDiv1">
        <ul>
          <li>
            <a href="/" title="Womens's Shoes" aria-label="Womens's Shoes">
              Women&apos;s Shoes
            </a>
          </li>
          <li>
            <a href="/" title="Men's Shoes" aria-label="Men's Shoes">
              Men&apos;s Shoes
            </a>
          </li>
          <li>
            <a href="/" title="Kids's Shoes" aria-label="Kids's Shoes">
              Kid&apos;s Shoes
            </a>
          </li>
          <li>
            <a href="/" title="Bags" aria-label="Bags">
              Bags
            </a>
          </li>
          <li>
            <a href="/" title="Accessories" aria-label="Accessories">
              Accessories
            </a>
          </li>
        </ul>
      </nav>

      <figure id="bannerboximg">
        <img src={banner} alt="shoestore-banner" />
      </figure>
    </section>
  );
}

export default BannerImg;
