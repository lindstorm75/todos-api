import express, { Application, Request, Response } from "express"
import { Document } from "mongoose"
import { connectDB, TodoModel } from "../models/Todo"
const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!")
})

app.get("/todos", async (req: Request, res: Response): Promise<any> => {
  connectDB()
  const result: any[] = await TodoModel.find({})
  res.status(200).json(result)
})

app.get("/todos/:id", async (req: Request, res: Response): Promise<any> => {
  connectDB()
  const id: number = +req.params.id
  const result: any | null = await TodoModel.findOne({ id })
  res.status(200).json(result || {})
})

app.post("/todos/", async (req: Request, res: Response) => {
  const username: string = req.body.username,
      title: string = req.body.title
  if (!username || !title)
    res.status(400).json({ message: "Bad request." })
  else {
    connectDB()
    const last: any = (await TodoModel.find().sort({ id: -1 }).limit(1))[0]
    let id: number = last === undefined ? 1 : Number(last.id) + 1
    const data: any = {
      id, username, title, completed: false
    }
    await TodoModel.create(data)
    res.status(200).json(data)
  }
})

app.put("/todos/:id", async (req: Request, res: Response) => {
  const id: number = +req.params.id
  if (req.body._id) delete req.body._id
  try {
    const todo: any = await TodoModel.findOneAndUpdate({ id }, req.body)
    for (const key in req.body)
      todo[key] = req.body[key]
    res.status(200).json(todo)
  } catch {
    res.status(404).json({ message: "Not found." })
  }
})

app.delete("/todos/:id", async (req: Request, res: Response) => {
  const id: number = +req.params.id
  await TodoModel.deleteOne({ id })
  res.status(200).json({ message: "Successfully deleted." })
})

app.listen(PORT, () => console.log("Server's up and running at port: " + PORT))