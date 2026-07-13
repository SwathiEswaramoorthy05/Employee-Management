import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCard from "../components/DashboardCard";
import EmployeeChart from "../components/EmployeeChart";
import RecentEmployees from "../components/RecentEmployees";
import { getDashboard, getEmployees } from "../services/employeeService";

import { FaUsers, FaUserCheck, FaUserTimes } from "react-icons/fa";

function Dashboard() {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    activeEmployees: 0,
    inactiveEmployees: 0,
  });

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const dashboardRes = await getDashboard();
      setStats(dashboardRes.data);

      const employeeRes = await getEmployees();
      setEmployees(employeeRes.data.employees);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>
      <h2 className="page-title">Dashboard</h2>

      <div className="cards-grid">
        <DashboardCard
          title="Total Employees"
          value={stats.totalEmployees}
          icon={<FaUsers />}
          growth="12"
          color="linear-gradient(135deg,#2563eb,#4f46e5)"
        />

        <DashboardCard
          title="Active Employees"
          value={stats.activeEmployees}
          icon={<FaUserCheck />}
          growth="8"
          color="linear-gradient(135deg,#14b8a6,#0f766e)"
        />

        <DashboardCard
          title="Inactive Employees"
          value={stats.inactiveEmployees}
          icon={<FaUserTimes />}
          growth="2"
          color="linear-gradient(135deg,#ef4444,#dc2626)"
        />
      </div>

      <div className="dashboard-grid">
        <EmployeeChart employees={employees} />
        <RecentEmployees employees={employees} />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
