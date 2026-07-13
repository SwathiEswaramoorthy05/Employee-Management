import { motion } from "framer-motion";

function DashboardCard({ title, value, icon, color, growth }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="dashboard-card"
      style={{
        background: color,
      }}
    >
      <div className="card-top">
        <div className="card-icon">{icon}</div>

        <div>
          <h6>{title}</h6>
          <h2>{value}</h2>
        </div>
      </div>

      <p>▲ {growth}% this month</p>
    </motion.div>
  );
}

export default DashboardCard;
