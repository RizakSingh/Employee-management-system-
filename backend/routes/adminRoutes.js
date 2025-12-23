const express = require("express");
const router = express.Router();
const { createEmployee,getEmployees } = require("../controllers/adminController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/create-employee", protect, adminOnly, createEmployee);
router.get("/employees", protect, adminOnly, getEmployees);

module.exports = router;
