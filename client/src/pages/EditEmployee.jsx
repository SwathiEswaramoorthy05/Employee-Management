import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

import { getEmployeeById, updateEmployee } from "../services/employeeService";

import { toast } from "react-toastify";

function EditEmployee() {
  const { id } = useParams();

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

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const { data } = await getEmployeeById(id);

    setEmployee({
      ...data.employee,
      joiningDate: data.employee.joiningDate.substring(0, 10),
    });
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateEmployee(id, employee);

      toast.success("Employee Updated Successfully");

      setTimeout(() => {
        navigate("/employees");
      }, 1500);
    } catch {
      toast.error("Update Failed");
    }
  };

  return (
    <>
      <DashboardLayout>
        <div className="container mt-5">
          <div className="card shadow">
            <div className="card-header bg-warning">
              <h3>Edit Employee</h3>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {[
                    ["Full Name", "fullName"],
                    ["Email", "email"],
                    ["Mobile", "mobile"],
                    ["Designation", "designation"],
                  ].map(([label, field]) => (
                    <div className="col-md-6 mb-3" key={field}>
                      <label>{label}</label>

                      <input
                        className="form-control"
                        name={field}
                        value={employee[field]}
                        onChange={handleChange}
                      />
                    </div>
                  ))}

                  <div className="col-md-6 mb-3">
                    <label>Department</label>

                    <select
                      className="form-select"
                      name="department"
                      value={employee.department}
                      onChange={handleChange}
                    >
                      <option>HR</option>
                      <option>IT</option>
                      <option>Finance</option>
                      <option>Sales</option>
                      <option>Marketing</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Joining Date</label>

                    <input
                      type="date"
                      className="form-control"
                      name="joiningDate"
                      value={employee.joiningDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <label>Status</label>

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

                <button className="btn btn-warning">Update Employee</button>
              </form>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default EditEmployee;
