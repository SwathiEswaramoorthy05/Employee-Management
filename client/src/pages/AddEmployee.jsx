import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../services/employeeService";
import DashboardLayout from "../layouts/DashboardLayout";
import { toast } from "react-toastify";

function AddEmployee() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    fullName: "",
    email: "",
    mobile: "",
    department: "",
    designation: "",
    joiningDate: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !employee.fullName ||
      !employee.email ||
      !employee.mobile ||
      !employee.department ||
      !employee.designation ||
      !employee.joiningDate
    ) {
      toast.error("Please fill all fields");
      return;
    }

    // Name validation
    if (employee.fullName.trim().length < 3) {
      toast.error("Full Name must contain at least 3 characters.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(employee.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Mobile validation
    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(employee.mobile)) {
      toast.error("Mobile number must be exactly 10 digits.");
      return;
    }

    // Joining Date Validation (Today or Future)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const joiningDate = new Date(employee.joiningDate);

    if (joiningDate < today) {
      toast.error("Joining Date cannot be before today.");
      return;
    }

    try {
      await addEmployee(employee);

      toast.success("Employee Added Successfully");

      setTimeout(() => {
        navigate("/employees");
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <DashboardLayout>
        <div className="container mt-5">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Add Employee</h3>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>

                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      value={employee.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={employee.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mobile</label>

                    <input
                      type="text"
                      name="mobile"
                      className="form-control"
                      value={employee.mobile}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Department</label>

                    <select
                      className="form-select"
                      name="department"
                      value={employee.department}
                      onChange={handleChange}
                    >
                      <option value="">Select Department</option>

                      <option>HR</option>

                      <option>IT</option>

                      <option>Finance</option>

                      <option>Sales</option>

                      <option>Marketing</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Designation</label>

                    <input
                      type="text"
                      name="designation"
                      className="form-control"
                      value={employee.designation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Joining Date</label>

                    <input
                      type="date"
                      name="joiningDate"
                      className="form-control"
                      value={employee.joiningDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <label className="form-label">Status</label>

                    <select
                      className="form-select"
                      name="status"
                      value={employee.status}
                      onChange={handleChange}
                    >
                      <option>Active</option>

                      <option>Inactive</option>
                    </select>
                  </div>
                </div>

                <button className="btn btn-success px-5">Add Employee</button>
              </form>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default AddEmployee;
