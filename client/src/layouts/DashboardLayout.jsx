import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
