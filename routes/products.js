const express = require("express")
const router = express.Router()
const { connectDB, closeDB } = require("../models/DB")
const ProductModel = require("../models/Product")

const allowedKeys = ["id", "name", "price", "img", "categoryId"]
const formatObj = (keys, target, backup) => {
  return keys.reduce((obj, key) => {
    if (target[key] !== undefined) obj[key] = target[key]
    else if (backup !== undefined) obj[key] = backup[key]
    return obj
  }, {})
}

router.get("/", async (req, res) => {
  connectDB()
  const raw = await ProductModel.find({})
  closeDB()
  const filteredData = raw.map(user => {
    return formatObj(allowedKeys, user)
  })
  res.status(200).json(filteredData)
})

module.exports = router