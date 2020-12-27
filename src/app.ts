import express, { Application, raw, Request, Response } from "express"
import { connectDB, TodoModel } from "./models/Todo"
const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!")
})

app.get("/todos", async (req: Request, res: Response): Promise<any> => {
  connectDB()
  const data: any[] = await TodoModel.find({})
  const result: any[] = data.map((data: any) => {
    const newObj: any = {}
    newObj.id = data.id
    newObj.username = data.username
    newObj.title = data.title
    newObj.completed = data.completed
    return newObj
  })
  res.status(200).json(result)
})

app.get("/todos/:id", async (req: Request, res: Response): Promise<any> => {
  connectDB()
  const id: number = +req.params.id
  const data: any | null = await TodoModel.findOne({ id })
  if (data === null) return res.status(400).json({})
  const newObj: any = {}
  newObj.id = data.id
  newObj.username = data.username
  newObj.title = data.title
  newObj.completed = data.completed
  res.status(200).json(newObj)
})

app.post("/todos/", async (req: Request, res: Response) => {
  const username: string = req.body.username,
      title: string = req.body.title
  if (req.body._id) delete req.body._id
  if (req.body.id) delete req.body.id
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
  if (req.body.id) delete req.body.id
  try {
    const todo: any = await TodoModel.findOneAndUpdate({ id }, req.body)
    for (const key in req.body)
      todo[key] = req.body[key]
    const newObj: any = {}
    newObj.id = todo.id
    newObj.username = todo.username
    newObj.title = todo.title
    newObj.completed = todo.completed
    res.status(200).json(newObj)
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