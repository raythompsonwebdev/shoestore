import { Schema, model, models } from 'mongoose'

const CartSchema = new Schema({
  _id: {
    type: String,
  },
  prodId: {
    type: Number,
  },
  style: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  gender: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
  price: {
    type: String,
  },
  cartImg: {
    type: String,
  },
  text: {
    type: String,
  },
  all: {
    type: String,
  },
  likes: {
    type: Number,
  },
  qty: {
    type: Number,
  },
})

const Cart = models.CartSchema || model('Cart', CartSchema)

export default Cart
