import { Schema, model, models } from 'mongoose'

const ProductSchema = new Schema({
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

const Product = models.ProductSchema || model('Product', ProductSchema)

export default Product
