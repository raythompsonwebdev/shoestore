import kids from "../images/kids-trainer.png";
import furlined from "../images/fur-lined-hiking-boot.png";
import basketball from "../images/basket-ball-shoe.png";
import cartImg from "../images/shoppingcart.gif";

const productData = [
  {
    id: 1,
    name: "Trainers",
    imgUrl: { kids },
    price: "50.00",
    CartImgUrl: { cartImg }
  },

  {
    id: 2,
    name: "Boots",
    imgUrl: { furlined },
    price: "80.00",
    CartImgUrl: { cartImg }
  },

  {
    id: 3,
    name: "Skate Shoes",
    imgUrl: { basketball },
    price: "90.00",
    CartImgUrl: { cartImg }
  },

  {
    id: 4,
    name: "Trainers",
    imgUrl: { kids },
    price: "80.00",
    CartImgUrl: { cartImg }
  }
];

export default productData;
