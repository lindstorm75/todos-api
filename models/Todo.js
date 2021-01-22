const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
  id: Number,
  username: String,
  title: String,
  completed: Boolean,
}, {
  versionKey: false
})
const TodoModel = mongoose.model("Todo", TodoSchema)

module.exports = TodoModel