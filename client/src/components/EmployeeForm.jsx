import { motion } from "framer-motion";

function EmployeeForm({ employee, handleChange, handleSubmit, buttonText }) {
  return (
    <motion.form
      className="employee-form"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
    >
      <div className="form-header">
        <div className="avatar-circle">
          {employee.fullName ? employee.fullName.charAt(0).toUpperCase() : "👤"}
        </div>

        <h2>{buttonText}</h2>
      </div>

      <div className="form-grid">
        <div className="floating-group">
          <input
            name="fullName"
            value={employee.fullName}
            onChange={handleChange}
            required
          />
          <label>Full Name</label>
        </div>

        <div className="floating-group">
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
          <label>Email</label>
        </div>

        <div className="floating-group">
          <input
            name="mobile"
            value={employee.mobile}
            onChange={handleChange}
            required
          />
          <label>Mobile Number</label>
        </div>

        <div className="floating-group">
          <select
            name="department"
            value={employee.department}
            onChange={handleChange}
          >
            <option value="">Department</option>
            <option>HR</option>
            <option>IT</option>
            <option>Finance</option>
            <option>Sales</option>
            <option>Marketing</option>
          </select>
        </div>

        <div className="floating-group">
          <input
            name="designation"
            value={employee.designation}
            onChange={handleChange}
          />
          <label>Designation</label>
        </div>

        <div className="floating-group">
          <input
            type="date"
            name="joiningDate"
            value={employee.joiningDate}
            onChange={handleChange}
          />
        </div>

        <div className="floating-group">
          <select name="status" value={employee.status} onChange={handleChange}>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <button className="save-btn">{buttonText}</button>
    </motion.form>
  );
}

export default EmployeeForm;
