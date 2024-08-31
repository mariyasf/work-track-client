import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import SideNavbar from "../../Components/SideNavbar/SideNavbar";

const Employee = () => {
    return (
        <div>
            <DashboardNavbar />
            {/* <SideNavbar /> */}
            {/* <Outlet />
            <SideNavbar /> */}
        </div>
    );
};

export default Employee;