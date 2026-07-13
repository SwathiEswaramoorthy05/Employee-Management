import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function EmployeeChart({ employees }) {
  const departments = ["HR", "IT", "Finance", "Sales", "Marketing"];

  const counts = departments.map(
    (dept) => employees.filter((emp) => emp.department === dept).length,
  );

  const data = {
    labels: departments,

    datasets: [
      {
        label: "Employees",
        data: counts,
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="chart-card">
      <h4>Department Overview</h4>

      <Bar data={data} />
    </div>
  );
}

export default EmployeeChart;
