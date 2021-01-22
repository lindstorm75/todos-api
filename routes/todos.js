const express = require("express")
const router = express.Router()
const { connectDB, closeDB } = require("../models/DB")
const TodoModel = require("../models/Todo")

const allowedKeys = ["id", "username", "title", "completed"]
const formatObj = (keys, target, backup) => {
  return keys.reduce((obj, key) => {
    if (target[key] !== undefined) obj[key] = target[key]
    else obj[key] = backup[key]
    return obj
  }, {})
}

router.get("/", async (req, res) => {
  connectDB()
  const raw = await TodoModel.find({})
  const result = raw.map(todo => {
    return formatObj(allowedKeys, todo)
  })
  res.status(200).json(result)
})

router.get("/:id", async (req, res)=> {
  connectDB()
  const id = +req.params.id
  const raw = await TodoModel.findOne({ id })
  if (raw === null) return res.status(404).json({})
  const result = formatObj(allowedKeys, raw)
  res.status(200).json(result)
})

router.post("/", async (req, res) => {
  const { username, title, completed } = req.body
  if (!username || !title)
    res.status(400).json({ message: "Bad request." })
  else {
    connectDB()
    const last = (await TodoModel.find().sort({ id: -1 }).limit(1))[0]
    let id = last === undefined ? 1 : Number(last.id) + 1
    const data = {
      id, username, title, completed: completed === undefined ? false : completed
    }
    await TodoModel.create(data)
    res.status(200).json(data)
  }
})

router.put("/:id", async (req, res) => {
  const id = +req.params.id
  try {
    const raw = req.body
    const allowed = ["title", "completed"]
    const filteredData = Object.keys(raw)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = raw[key]
        return obj
      }, {})
    const todo = await TodoModel.findOneAndUpdate({ id }, filteredData)
    const result = formatObj(allowedKeys, filteredData, todo)
    res.status(200).json(result)
  } catch {
    res.status(404).json({ message: "Not found." })
  }
})

router.delete("/:id", async (req, res) => {
  const id = +req.params.id
  await TodoModel.deleteOne({ id })
  res.status(200).json({ message: "Successfully deleted." })
})

module.exports = router