const express = require("express");
const router = express.Router();

const {
  addEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  getDashboardStats,
  searchEmployees,
  filterEmployees,
} = require("../controllers/employeeController");

router.get("/", getEmployees);
router.post("/", addEmployee);

router.get("/dashboard", getDashboardStats);
router.get("/search", searchEmployees);
router.get("/filter", filterEmployees);

router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;