const express = require('express')
const app = express()
const todoRouter = require('./routes/tasks')

const port = 3000

// routes
app.use('/api/v1/tasks', todoRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`)
})