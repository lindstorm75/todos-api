const mongoose = require("mongoose")
mongoose.set('useFindAndModify', false)

const UserSchema = new mongoose.Schema({
  id: Number,
  username: String,
  password: String,
  firstname: String,
  lastName: String,
  email: String,
  address: String
}, {
  versionKey: false
})
const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel