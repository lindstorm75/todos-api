import mongoose, { Schema, Model } from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const URI = process.env.URI!

mongoose.set('useFindAndModify', true)

mongoose.connect(URI, { useFindAndModify: false });

export function connectDB(): void {
  mongoose.connect(
    URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
}

const TodoSchema: Schema = new Schema({
  id: Number,
  username: String,
  title: String,
  completed: Boolean,
}, {
  versionKey: false
})

export const TodoModel: Model<any> = mongoose.model("Todo", TodoSchema)