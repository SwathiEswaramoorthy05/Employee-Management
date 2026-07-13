function RecentEmployees({ employees }) {
  return (
    <div className="recent-card">
      <h4>Recent Employees</h4>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.slice(0, 5).map((emp) => (
            <tr key={emp._id}>
              <td>
                <div className="employee-info">
                  <div className="employee-avatar">
                    {emp.fullName.charAt(0).toUpperCase()}
                  </div>

                  {emp.fullName}
                </div>
              </td>

              <td>{emp.department}</td>

              <td>
                <span
                  className={
                    emp.status === "Active" ? "badge-active" : "badge-inactive"
                  }
                >
                  {emp.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentEmployees;
