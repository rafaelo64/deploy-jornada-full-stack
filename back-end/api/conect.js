import { MongoClient } from "mongodb"
const URI = "mongodb+srv://rafael:Rafaelo64646@cluster0.lgrrc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotifyAula")
// const songColection = await db.collection("songs").find({}).toArray()

// console.log(songColection)