import {
  FaUsers,
  FaChartPie,
  FaPlusCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      title: "Dashboard",
      icon: <FaChartPie />,
      path: "/dashboard",
    },

    {
      title: "Employees",
      icon: <FaUsers />,
      path: "/employees",
    },

    {
      title: "Add Employee",
      icon: <FaPlusCircle />,
      path: "/add",
    },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <span>Employee Management</span>
      </div>

      <div className="menu">
        {menu.map((item) => (
          <Link
            key={item.path}
            className={
              location.pathname === item.path ? "menu-item active" : "menu-item"
            }
            to={item.path}
          >
            {item.icon}

            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
