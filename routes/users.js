const express = require("express")
const router = express.Router()
const { connectDB, closeDB } = require("../models/DB")
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
  closeDB()
  const filteredData = raw.map(user => {
    return formatObj(allowedKeys, user)
  })
  res.status(200).json(filteredData)
})

router.get("/:id", async (req, res)=> {
  connectDB()
  const id = +req.params.id
  const raw = await UserModel.findOne({ id })
  closeDB()
  if (raw === null) return res.status(404).json({})
  const filteredData = formatObj(allowedKeys, raw)
  console.log(filteredData)
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
    closeDB()
    const filteredData = formatObj(allowedKeys, data)
    res.status(200).json(filteredData)
  }
})

router.put("/:id", async (req, res) => {
  connectDB()
  const id = +req.params.id
  try {
    const raw = req.body
    const allowed = ["username", "password", "firstName", "lastName", "email", "address"]
    const validData = Object.keys(raw)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = raw[key]
        return obj
      }, {})
    const data = await UserModel.findOneAndUpdate({ id }, validData)
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
  await UserModel.deleteOne({ id })
  closeDB()
  res.status(200).json({ message: "Successfully deleted." })
})

module.exports = router