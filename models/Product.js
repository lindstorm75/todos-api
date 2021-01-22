const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  img: Array,
  categoryId: String,
}, {
  versionKey: false
})
const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = ProductModel