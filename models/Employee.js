const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
  sn: String,
  firstName: String,
  lastName: String,
  departmentId: Number,
  salary: Number,
  email: String,
  address: String
}, {
  versionKey: false
})
const EmployeeModel = mongoose.model("Employee", EmployeeSchema)

module.exports = EmployeeModel