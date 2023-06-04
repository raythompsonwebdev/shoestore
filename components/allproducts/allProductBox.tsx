import Link from "next/link";
import Image from "next/image";
import { Key } from "react";

export default function productBox(props: {
  imgUrl: Key | null | undefined;
  name: string;
  cartImg: string;
  price: string;
  style: string;
}) {
  const { imgUrl, name, cartImg, price, style } = props;

  return (
    <figure className="product-box">
      <Image
        className="product-box-img"
        src={`${imgUrl}`}
        alt={name}
        width="175"
        height="150"
      />
      <figcaption className="product-box-caption">
        <p className="product-box-title"> {style}</p>
        <p className="product-box-price ">£{price}</p>
        <Link href={`/product/${name}`} className="product-box-icon-link">
          <Image
            className="product-box-icon"
            src={cartImg}
            alt="shoppingcart icon"
            width="34"
            height="48"
          />
        </Link>
      </figcaption>
    </figure>
  );
}
