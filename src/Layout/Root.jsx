import { Outlet } from "react-router-dom";
import SharedNavBar from "../Pages/Shared/NavBar/SharedNavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <SharedNavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;