import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Redirect */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Employee List */}
          <Route path="/employees" element={<Employees />} />

          {/* Add Employee */}
          <Route path="/add" element={<AddEmployee />} />

          {/* Edit Employee */}
          <Route path="/edit/:id" element={<EditEmployee />} />

          {/* Employee Details */}
          <Route path="/employee/:id" element={<EmployeeDetails />} />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div
                className="d-flex justify-content-center align-items-center vh-100"
              >
                <div className="text-center">
                  <h1 className="display-3 text-danger">404</h1>
                  <h3>Page Not Found</h3>
                </div>
              </div>
            }
          />
        </Routes>

        {/* Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </BrowserRouter>
    </>
  );
}

export default App;