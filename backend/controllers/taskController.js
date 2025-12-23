const Task = require("../models/task");

// 🔹 ADMIN: Create Task
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, assignedTo } = req.body;

    const task = await Task.create({
      title,
      description,
      dueDate,
      assignedTo,
      assignedBy: req.user.id, // admin id from token
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("CREATE TASK ERROR ", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 EMPLOYEE: Get My Tasks
exports.getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 EMPLOYEE: Update Task Status
exports.updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const task = await Task.findOne({
      _id: req.params.id,
      assignedTo: req.user.id,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.status = status;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
