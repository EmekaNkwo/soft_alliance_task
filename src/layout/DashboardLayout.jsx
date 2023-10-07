import { Footer, Sidebar, Topbar } from "../components";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.scss";

const DashboardLayout = () => {
  return (
    <div className="db_layout">
      <div className="db_container">
        <div className="db_layout_left">
          <Sidebar />
        </div>
        <div className="db_layout_right">
          <div className="db_right_content">
            <Topbar />
            <div className="db_right_main_content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
