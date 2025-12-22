const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");



const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



// connect database
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);


const { protect, adminOnly } = require("./middleware/authMiddleware");
const { trusted } = require("mongoose");



// test route
app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
