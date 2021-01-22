const express = require("express")
const router = express.Router()
const { connectDB, closeDB } = require("../models/DB")
const ProductModel = require("../models/Product")

const allowedKeys = ["id", "name", "price", "imgs", "categoryId"]
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

router.get("/:id", async (req, res)=> {
  connectDB()
  const id = +req.params.id
  const raw = await ProductModel.findOne({ id })
  closeDB()
  if (raw === null) return res.status(404).json({})
  const filteredData = formatObj(allowedKeys, raw)
  console.log(filteredData)
  res.status(200).json(filteredData)
})

router.post("/", async (req, res) => {
  const { name, price, imgs, categoryId } = req.body
  if (!name || !price || price <= 0 || !imgs || !Array.isArray(imgs) || !categoryId)
    res.status(400).json({ message: "Bad request." })
  else {
    connectDB()
    const last = (await ProductModel.find().sort({ id: -1 }).limit(1))[0]
    const id = last === undefined ? 1 : Number(last.id) + 1
    const data = {
      id, name, price, imgs, categoryId
    }
    await ProductModel.create(data)
    closeDB()
    const filteredData = formatObj(allowedKeys, data)
    res.status(200).json(filteredData)
  }
})

router.put("/:id", async (req, res) => {
  const id = +req.params.id
  try {
    connectDB()
    const raw = req.body
    const allowed = ["name", "price", "imgs", "categoryId"]
    const validData = Object.keys(raw)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = raw[key]
        return obj
      }, {})
    const data = await ProductModel.findOneAndUpdate({ id }, validData)
    closeDB()
    const filteredData = formatObj(allowedKeys, validData, data)
    res.status(200).json(filteredData)
  } catch {
    res.status(404).json({ message: "Not found." })
  }
})

router.delete("/:id", async (req, res) => {
  connectDB()
  const id = +req.params.id
  await ProductModel.deleteOne({ id })
  closeDB()
  res.status(200).json({ message: "Successfully deleted." })
})

module.exports = router