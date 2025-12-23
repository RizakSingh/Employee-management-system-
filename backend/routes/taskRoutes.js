const express = require("express");
const router = express.Router();
const {
  createTask,
  getMyTasks,
  updateTaskStatus,
} = require("../controllers/taskController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

// ADMIN
router.post("/create", protect, adminOnly, createTask);

// EMPLOYEE
router.get("/my", protect, getMyTasks);
router.patch("/:id/status", protect, updateTaskStatus);

module.exports = router;
