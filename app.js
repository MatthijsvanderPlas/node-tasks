const express = require('express')
const app = express()
const tasksRouter = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const port = 3000

// middleware
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasksRouter)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
