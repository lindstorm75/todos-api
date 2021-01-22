const express = require("express")
const router = express.Router()
const { connectDB, closeDB } = require("../models/DB")
const EmployeeModel = require("../models/Employee")

const allowedKeys = ["sn", "firstName", "lastName", "departmentId", "salary", "email", "address"]
const formatObj = (keys, target, backup) => {
  return keys.reduce((obj, key) => {
    if (target[key] !== undefined) obj[key] = target[key]
    else if (backup !== undefined) obj[key] = backup[key]
    return obj
  }, {})
}

router.get("/", async (req, res) => {
  connectDB()
  const raw = await EmployeeModel.find({})
  closeDB()
  const filteredData = raw.map(user => {
    return formatObj(allowedKeys, user)
  })
  res.status(200).json(filteredData)
})

router.get("/:sn", async (req, res)=> {
  connectDB()
  const sn = req.params.sn
  const raw = await EmployeeModel.findOne({ sn })
  closeDB()
  if (raw === null) return res.status(404).json({})
  const filteredData = formatObj(allowedKeys, raw)
  console.log(filteredData)
  res.status(200).json(filteredData)
})

router.post("/", async (req, res) => {
  const { sn, firstName, lastName, departmentId, salary, email, address } = req.body
  if (
    !sn || !firstName || !lastName || !departmentId || !Number.isInteger(departmentId)||
    !salary || !Number.isInteger(salary) || salary < 0 || !email || !address
  )
    res.status(400).json({ message: "Bad request." })
  else {
    connectDB()
    const last = (await EmployeeModel.find().sort({ id: -1 }).limit(1))[0]
    const id = last === undefined ? 1 : Number(last.id) + 1
    const data = {
      sn, firstName, lastName, departmentId, salary, email, address
    }
    await EmployeeModel.create(data)
    closeDB()
    const filteredData = formatObj(allowedKeys, data)
    res.status(200).json(filteredData)
  }
})

// router.put("/:id", async (req, res) => {
//   connectDB()
//   const id = +req.params.id
//   try {
//     const raw = req.body
//     const allowed = ["username", "password", "firstName", "lastName", "email", "address"]
//     const validData = Object.keys(raw)
//       .filter(key => allowed.includes(key))
//       .reduce((obj, key) => {
//         obj[key] = raw[key]
//         return obj
//       }, {})
//     const data = await UserModel.findOneAndUpdate({ id }, validData)
//     closeDB()
//     const filteredData = formatObj(allowedKeys, validData, data)
//     res.status(200).json(filteredData)
//   } catch {
//     res.status(404).json({ message: "Not found." })
//   }
// })

// router.delete("/:id", async (req, res) => {
//   connectDB()
//   const id = +req.params.id
//   await UserModel.deleteOne({ id })
//   closeDB()
//   res.status(200).json({ message: "Successfully deleted." })
// })

module.exports = router