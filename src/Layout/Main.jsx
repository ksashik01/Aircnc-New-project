import { Outlet } from "react-router-dom";
import Navbar from "../componesnts/Shared/Navbar/Navbar";
import Footer from "../componesnts/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
           <Navbar/>
  <div className="pt-28 pb-20">
<Outlet/>
<Footer/>
  </div>


        </div>
    );
};

export default Main;