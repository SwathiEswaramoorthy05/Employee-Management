import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import { getEmployeeById } from "../services/employeeService";

function EmployeeDetails() {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const { data } = await getEmployeeById(id);
      setEmployee(data.employee);
    } catch (err) {
      console.log(err);
    }
  };

  if (!employee) {
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <h3>Loading...</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <DashboardLayout>
        <div className="container mt-5">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h3>{employee.fullName}</h3>
            </div>

            <div className="card-body">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Email</th>

                    <td>{employee.email}</td>
                  </tr>

                  <tr>
                    <th>Mobile</th>

                    <td>{employee.mobile}</td>
                  </tr>

                  <tr>
                    <th>Department</th>

                    <td>{employee.department}</td>
                  </tr>

                  <tr>
                    <th>Designation</th>

                    <td>{employee.designation}</td>
                  </tr>

                  <tr>
                    <th>Joining Date</th>

                    <td>
                      {new Date(employee.joiningDate).toLocaleDateString()}
                    </td>
                  </tr>

                  <tr>
                    <th>Status</th>

                    <td>
                      <span
                        className={`badge ${
                          employee.status === "Active"
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {employee.status}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <Link to="/employees" className="btn btn-primary">
                Back
              </Link>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default EmployeeDetails;
