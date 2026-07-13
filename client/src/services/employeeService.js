import axios from "axios";
import { BASE_URL } from "../constants/api";

const API = axios.create({
  baseURL: BASE_URL,
});

// Dashboard
export const getDashboard = () => API.get("/employees/dashboard");

// Employees
export const getEmployees = () => API.get("/employees");

export const getEmployeeById = (id) =>
  API.get(`/employees/${id}`);

export const addEmployee = (employee) =>
  API.post("/employees", employee);

export const updateEmployee = (id, employee) =>
  API.put(`/employees/${id}`, employee);

export const deleteEmployee = (id) =>
  API.delete(`/employees/${id}`);

// Search
export const searchEmployee = (name) =>
  API.get(`/employees/search?name=${name}`);

// Filter
export const filterEmployee = (department, status) =>
  API.get(
    `/employees/filter?department=${department}&status=${status}`
  );