const User = require("../models/user");
const bcrypt = require("bcryptjs");
const Task = require("../models/task");

// CREATE EMPLOYEE (ADMIN ONLY)
exports.createEmployee = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Employee already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const employee = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "employee",
    });

    res.status(201).json({
      message: "Employee created successfully",
      employee: {
        id: employee._id,
        name: employee.name,
        email: employee.email,
        role: employee.role,
      },
    });
  } catch (error) {
    console.error("CREATE EMPLOYEE ERROR ", error);
    res.status(500).json({ message: "Server error" });
  }
};
exports.getEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: "employee" }).select(
      "_id name email"
    );
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("assignedTo", "name email")
      .populate("assignedBy", "name email")
      .sort({ createdAt: -1 });

    res.json(tasks);
  } catch (error) {
    console.error("GET ALL TASKS ERROR", error);
    res.status(500).json({ message: "Server error" });
  }
};
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};