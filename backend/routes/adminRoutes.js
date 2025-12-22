const express = require("express");
const router = express.Router();
const { createEmployee } = require("../controllers/adminController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/create-employee", protect, adminOnly, createEmployee);

module.exports = router;
