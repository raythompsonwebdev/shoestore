// import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

export default function productBox(props) {
  const { imgUrl, name, cartImg, price } = props;

  return (
    <figure className="product-box">
      <Image
        className="product-box-img"
        src={imgUrl}
        alt={name}
        width={174}
        height={140}
      />
      <figcaption className="product-box-caption">
        <p className="product-box-title"> {name}</p>
        <p className="product-box-price ">£{price}</p>
        <Link href={`/allproducts/${name}`}>
          <a className="product-box-icon-link">
            <Image
              className="product-box-icon"
              src={cartImg}
              alt="shoppingcart icon"
              width={34}
              height={48}
            />
          </a>
        </Link>
      </figcaption>
    </figure>
  );
}

// productBox.propTypes = {
//   name: PropTypes.string.isRequired,
//   imgUrl: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   cartImg: PropTypes.string.isRequired,
// };
