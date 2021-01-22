const mongoose = require("mongoose")
require("dotenv").config()

mongoose.set('useFindAndModify', false)

function connectDB() {
  mongoose.connect(
    process.env.URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
}

module.exports = connectDB