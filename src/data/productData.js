import kids from "../images/kids-trainer.png";
import furlined from "../images/fur-lined-hiking-boot.png";
import basketball from "../images/basket-ball-shoe.png";
import ladies from "../images/fur-lined-ladies-boot.png";
import cartImg from "../images/shoppingcart.png";

const productData = [
  {
    id: 1,
    name: "trainers",
    imgUrl: kids,
    price: "50.00",
    cartImg,
  },

  {
    id: 2,
    name: "hiking-boots",
    imgUrl: furlined,
    price: "80.00",
    cartImg,
  },

  {
    id: 3,
    name: "basketball-shoes",
    imgUrl: basketball,
    price: "90.00",
    cartImg,
  },

  {
    id: 4,
    name: "ladies-boots",
    imgUrl: ladies,
    price: "80.00",
    cartImg,
  },
];

export default productData;
