const mongoose = require("mongoose")
require("dotenv").config()

mongoose.set('useFindAndModify', false)

function connectDB() {
  mongoose.connect(
    process.env.URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
}

const TodoSchema = new mongoose.Schema({
  id: Number,
  username: String,
  title: String,
  completed: Boolean,
}, {
  versionKey: false
})
const TodoModel = mongoose.model("Todo", TodoSchema)

module.exports = {
  connectDB, TodoModel
}