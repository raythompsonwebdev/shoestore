// import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

function FrontPageBox(props) {
  const { imgUrl, name, cartImg, price, style } = props;

  return (
    <figure className="product-box">
      <Image
        className="product-box-img"
        src={imgUrl}
        alt={name}
        width={175}
        height={150}
      />
      <figcaption className="product-box-caption">
        <p className="product-box-title"> {style}</p>
        <p className="product-box-price">{price}</p>
        <Link href={`/product/${name}`} className="product-box-icon-link">
          <Image
            className="product-box-price-icon"
            src={cartImg}
            alt="shoppingcart icon"
            width={34}
            height={48}
          />
        </Link>
      </figcaption>
    </figure>
  );
}

// FrontPageBox.propTypes = {
//   name: PropTypes.string.isRequired,
//   imgUrl: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   cartImg: PropTypes.string.isRequired,
// };

export default FrontPageBox;
