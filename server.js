// import express
import express from "express"
// import cors
import cors from "cors"
// import routes
import Router from "./routes.js"

import dotenv from "dotenv"
// dotenv config
dotenv.config()

// init express
const app = express()

// use express json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use cors
app.use(cors())

// use router
app.use(Router)

const port = process.env.PORT
const host = process.env.DB_HOST

app.listen(process.env.PORT, 'localhost', () => console.log(`Server is running, db server at ${host}:${port}`))