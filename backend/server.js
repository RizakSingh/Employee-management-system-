const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const taskRoutes = require("./routes/taskRoutes");



const app = express();

// middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://employee-management-system-drab-seven.vercel.app",
    ],
    credentials: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({extended:true}));



// connect database
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/tasks", taskRoutes);



const { protect, adminOnly } = require("./middleware/authMiddleware");
const { trusted } = require("mongoose");



// test route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});
app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
