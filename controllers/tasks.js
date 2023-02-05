const Task = require('../models/task')

const getAllTasks = (req, res) => {
  res.send('All Tasks')
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (err) {
    console.log(err)
  }
}

const getTask = (req, res) => {
  res.send('Single Task')
}

const updateTask = (req, res) => {
  res.send('Update Task')
}

const deleteTask = (req, res) => {
  res.send('Delete Task')
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}