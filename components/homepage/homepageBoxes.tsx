// import PropTypes from "prop-types";
import { Key } from "react";
import HomePageBox from "./homePageBox";

export default function HomePageBoxes(props: { productData: any }) {
  const { productData } = { ...props };

  const NewProduct = productData
    .slice(0, 8)
    .map(
      (item: {
        _id: Key | null | undefined;
        name: any;
        imgUrl: any;
        price: any;
        cartImg: any;
        style: any;
      }) => (
        <HomePageBox
          key={item._id}
          name={item.name}
          imgUrl={item.imgUrl}
          price={item.price}
          cartImg={item.cartImg}
          style={item.style}
        />
      )
    );

  return <div className="product-boxes">{NewProduct}</div>;

  //return <div className="product-boxes">test</div>;
}

// FrontPageBoxes.defaultProps = {
//   productData: [],
// };

// FrontPageBoxes.propTypes = {
//   productData: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       prodId: PropTypes.number,
//     })
//   ),
// };
