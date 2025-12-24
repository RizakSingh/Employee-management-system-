const express = require("express");
const router = express.Router();
const { createEmployee,getEmployees,getAllTasks,deleteTask } = require("../controllers/adminController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/create-employee", protect, adminOnly, createEmployee);
router.get("/employees", protect, adminOnly, getEmployees);
router.get("/tasks", protect, adminOnly, getAllTasks);
router.delete("/tasks/:id", protect, adminOnly, deleteTask);
module.exports = router;
