const express = require("express")
const router = express.Router()
const connectDB = require("../models/DB")
const UserModel = require("../models/User")

const allowedKeys = ["id", "username", "firstName", "lastName", "email", "address"]
const formatObj = (keys, target, backup) => {
  return keys.reduce((obj, key) => {
    if (target[key] !== undefined) obj[key] = target[key]
    else if (backup !== undefined) obj[key] = backup[key]
    return obj
  }, {})
}

router.get("/", async (req, res) => {
  connectDB()
  const raw = await UserModel.find({})
  const filteredData = raw.map(user => {
    console.log(user)
    return formatObj(allowedKeys, user)
  })
  res.status(200).json(filteredData)
})

router.get("/:id", async (req, res)=> {
  connectDB()
  const id = +req.params.id
  const raw = await UserModel.findOne({ id })
  if (raw === null) return res.status(404).json({})
  const filteredData = formatObj(allowedKeys, raw)
  res.status(200).json(filteredData)
})

router.post("/", async (req, res) => {
  const { username, password, firstName, lastName, email, address } = req.body
  if (!username || !password || !firstName || !lastName, !email, !address)
    res.status(400).json({ message: "Bad request." })
  else {
    connectDB()
    const last = (await UserModel.find().sort({ id: -1 }).limit(1))[0]
    const id = last === undefined ? 1 : Number(last.id) + 1
    const data = {
      id, username, password, firstName, lastName, email, address
    }
    await UserModel.create(data)
    const filteredData = formatObj(allowedKeys, data)
    res.status(200).json(filteredData)
  }
})

module.exports = router