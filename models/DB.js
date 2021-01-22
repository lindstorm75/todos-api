const mongoose = require("mongoose")
require("dotenv").config()

mongoose.set('useFindAndModify', false)

function connectDB() {
  mongoose.connect(
    process.env.URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
}

function closeDB() {
  mongoose.connection.close()
}

module.exports = { connectDB, closeDB }