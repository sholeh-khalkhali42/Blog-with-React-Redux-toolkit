import {Outlet} from "react-router-dom"
import { Navbar } from "./Navbar";

const Mainlayout=()=>{
    return(
        <>
<Navbar/>
<div className="container">
<Outlet/>
</div>

        </>


    )

}
export default Mainlayout;