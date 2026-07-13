import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import EmployeeTable from "../components/EmployeeTable";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

import { getEmployees, deleteEmployee } from "../services/employeeService";

function Employees() {
  const [employees, setEmployees] = useState([]);

  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("");

  const [status, setStatus] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const { data } = await getEmployees();

    setEmployees(data.employees);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Employee?")) return;

    await deleteEmployee(id);

    loadEmployees();
  };

  const filteredEmployees = employees.filter((emp) => {
    return (
      emp.fullName.toLowerCase().includes(search.toLowerCase()) &&
      (department === "" || emp.department === department) &&
      (status === "" || emp.status === status)
    );
  });

  return (
    <>
      <DashboardLayout>
        <div className="container mt-4">
          <h2 className="mb-4">Employee List</h2>

          <div className="row align-items-center mb-4">
            <div className="col-lg-4 mb-3 mb-lg-0">
              <SearchBar value={search} onChange={setSearch} />
            </div>

            <div className="col-lg-8">
              <FilterBar
                department={department}
                status={status}
                setDepartment={setDepartment}
                setStatus={setStatus}
              />
            </div>
          </div>

          <EmployeeTable
            employees={filteredEmployees}
            onDelete={handleDelete}
          />
        </div>
      </DashboardLayout>
    </>
  );
}

export default Employees;
