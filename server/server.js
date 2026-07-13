const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middlewares
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// Default Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Employee Management API Running Successfully",
  });
});

// Routes
app.use("/api/employees", require("./routes/employeeRoutes"));

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
