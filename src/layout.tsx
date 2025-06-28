import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div className="layoutScreen">
            <h1>This is the layout!</h1>
            <Outlet />
        </div>
    )
}