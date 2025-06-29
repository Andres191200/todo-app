import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

export default function Layout(){
    return(
        <div className="layoutScreen">
            <Sidebar />
            <Outlet />
        </div>
    )
}