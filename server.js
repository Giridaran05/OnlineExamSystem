const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://online-exam-system-frontend.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const examRoutes = require("./routes/examRoutes");
const resultRoutes = require("./routes/resultRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/exams", examRoutes);
app.use("/api/results", resultRoutes);

app.get("/", (req, res) => {
  res.send("Online Examination System API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});