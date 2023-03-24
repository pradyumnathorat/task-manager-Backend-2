const express = require('express');
const taskModel = require('../models/taskSchema');
const router = express.Router();
router.use(express.json());

router.post('/upload', async (req, res) => {
  try {
    const { title, description, dueDate, priority, status, category } = req.body;
    console.log(req.body);
    console.log(req.user.data);
    console.log(category);
    const task = await taskModel.create({
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
      status: status,
      category: category,
      user: req.user.data
    })
    console.log(task);
    return res.send({ message: 'Task created successfully.' });
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
});

router.get('/upload', async (req, res) => {
  try {
    const tasks = await taskModel.find({ user: req.user.data });
    res.status(200).json({
      data: tasks
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    })
  }
})

router.delete("/delete", async (req, res) => {
  try {
    const _id = req.headers["user_id"];
    console.log(_id);
    const data = await taskModel.findByIdAndDelete({ _id: _id })
    return res.status(200).json({
      message: "Task Deleted",
    })
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
})

router.patch("/edit", async (req, res) => {
  try {
    const { title, description, dueDate, priority, status } = req.body;
    const _id = req.headers["user_id"];
    console.log(_id);
    const data = await taskModel.findByIdAndUpdate({ _id: _id } ,{
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
      status: status
    })
    return res.status(200).json({
      message: "Task Updated",
    })
  } catch (err) {
    return res.status(500).json({
      error: err.message
    })
  }
})

module.exports = router;