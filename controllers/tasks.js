const getTasks = (req, res) => {
  res.send('All Tasks')
}

const createTask = (req, res) => {
  res.send('Task created')
}

const getSingleTask = (req, res) => {
  res.send('Single Task')
}

const updateTask = (req, res) => {
  res.send('Update Task')
}

const deleteTask = (req, res) => {
  res.send('Delete Task')
}

module.exports = {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
}