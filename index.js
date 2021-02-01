const express = require("express")
const app = express()
const fs = require("fs")
const PORT = process.env.PORT || 3000

// routes
const todos = require("./routes/todos")
const users = require("./routes/users")
const products = require("./routes/products")
const employees = require("./routes/employees")

app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
  next()
})


app.get("/", (req, res) => {
  res.sendFile (__dirname + "/index.html")
})

app.use("/todos", todos)
app.use("/users", users)
app.use("/products", products)
app.use("/employees", employees)

app.listen(PORT, () => console.log("Server's up and running at port: " + PORT))
