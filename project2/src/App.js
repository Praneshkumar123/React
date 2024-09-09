import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Company from "./basic/company";
import Item from "./basic/item";
import Employee from "./basic/employee";
import Customer from "./basic/customer";
import City from "./basic/city";
import HookOne from "./hooks/page1";
import HookTwo from "./hooks/page2";
import HookThree from "./hooks/page3";
import HookFour from "./hooks/page4";
import HookFive from "./hooks/page5";
import ApiOne from "./api/api1";
import ApiTwo from "./api/api2";
function App() {
  return (
    <HashRouter>
        <header>
            <Link className="toplink" to="/Company"> Companies </Link>
            <Link className="toplink" to="/item"> Itemlist </Link>
            <Link className="toplink" to="/employee"> Employees </Link>
            <Link className="toplink" to="/customer"> Customers </Link>
            <Link className="toplink" to="/city"> City </Link>
            <Link className="toplink" to="/hook1"> H-1 </Link>
            <Link className="toplink" to="/hook2"> H-2 </Link>
            <Link className="toplink" to="/hook3"> H-3 </Link>
            <Link className="toplink" to="/hook4"> H-4 </Link>
            <Link className="toplink" to="/hook5"> H-5 </Link>
            <Link className="toplink" to="/api1"> Regsiter </Link>
            <Link className="toplink" to="/api2"> Details </Link>
        </header>

        <Routes>
            <Route exact path="/api2" element={ <ApiTwo/> }/>
            <Route exact path="/api1" element={ <ApiOne/> }/>
            <Route exact path="/hook5" element={ <HookFive/> }/>
            <Route exact path="/hook4" element={ <HookFour/> }/>
            <Route exact path="/hook3" element={ <HookThree/> }/>
            <Route exact path="/hook2" element={ <HookTwo/> }/>
            <Route exact path="/hook1" element={ <HookOne/> }/>
            <Route exact path="/company" element={ <Company/> }/>
            <Route exact path="/item" element={ <Item/> }/>
            <Route exact path="/employee" element={ <Employee/> }/>
            <Route exact path="/customer" element={ <Customer/> }/>
            <Route exact path="/city" element={ <City/> }/>
        </Routes>
    </HashRouter>
  );
}

export default App;