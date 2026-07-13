import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

import { Link } from "react-router-dom";

function EmployeeTable({ employees, onDelete }) {
  return (
    <div className="table-card">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Status</th>
            <th>Joining Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>
                <div className="employee-info">
                  <div className="employee-avatar">
                    {emp.fullName.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h6>{emp.fullName}</h6>

                    <small>{emp.email}</small>
                  </div>
                </div>
              </td>

              <td>{emp.department}</td>

              <td>{emp.designation}</td>

              <td>
                <span
                  className={
                    emp.status === "Active" ? "badge-active" : "badge-inactive"
                  }
                >
                  {emp.status}
                </span>
              </td>

              <td>{new Date(emp.joiningDate).toLocaleDateString()}</td>

              <td>
                <div className="action-buttons">
                  <Link to={`/employee/${emp._id}`} className="view-btn">
                    <FaEye />
                  </Link>

                  <Link to={`/edit/${emp._id}`} className="edit-btn">
                    <FaEdit />
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() => onDelete(emp._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
