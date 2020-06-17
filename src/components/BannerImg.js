import React from "react";

const BannerImg = () => {

  return (
    <section id="bannerbox">
      <hgroup>
        <h1>LORUM IPSUN DOLOR AMET </h1>
        <h2>ipsum vel voluptate perspiciatis, quis</h2>
      </hgroup>

      <figure id="bannerboximg">
        <img src={banner} alt="bannerimage" />
      </figure>

      <nav id="apDiv1">
        <ul>
          <li>
            <a href="/" title="Womens's Shoes">
              Women's Shoes
            </a>
          </li>
          <li>
            <a href="/" title="Men's Shoes">
              Men's Shoes
            </a>
          </li>
          <li>
            <a href="/" title="Kids's Shoes">
              Kid's Shoes
            </a>
          </li>
          <li>
            <a href="/" title="Bags">
              Bags
            </a>
          </li>
          <li>
            <a href="/" title="Accessories">
              Accessories
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default BannerImg;