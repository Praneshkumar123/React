import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Myhome from "./basic/home";
import Myuser from "./basic/user";
import Myproduct from "./basic/product";
import Mycustomer from "./basic/customer";
import Itemlist from "./basic/item";
import HookOne from "./hooks/page1";
import HookTwo from "./hooks/page2";
import HookThree from "./hooks/page3";
import HookFour from "./hooks/page4";
import HookFive from "./hooks/page5";
import HookSix from "./hooks/page6";
import HookSeven from "./hooks/page7";
import HookEight from "./hooks/page8";
import HookNine from "./hooks/page9";
import ApiOne from "./api/api1";
import ApiTwo from "./api/api2";
import ApiThree from "./api/api3";
import ApiFour from "./api/api4";
import ApiFive from "./api/api5";
import ApiSix from "./api/api6";
import ApiSeven from "./api/api7";
import ApiEight from "./api/api8";
import ApiNine from "./api/api9";
import ApiTen from "./api/api10";
function App() {
  return (
    <HashRouter>
        <header>
            <Link className="toplink" to=""> Home </Link>
            <Link className="toplink" to="/user"> Manage User </Link>
            <Link className="toplink" to="/product"> Manage Product </Link>
            <Link className="toplink" to="/customer"> Manage Customer </Link>
            <Link className="toplink" to="/item"> Props </Link>
            <Link className="toplink" to="/hook1"> H-1 </Link>
            <Link className="toplink" to="/hook2"> H-2 </Link>
            <Link className="toplink" to="/hook3"> H-3 </Link>
            <Link className="toplink" to="/hook4"> H-4 </Link>
            <Link className="toplink" to="/hook5"> H-5 </Link>
            <Link className="toplink" to="/hook6"> H-6 </Link>
            <Link className="toplink" to="/hook7"> H-7 </Link>
            <Link className="toplink" to="/hook8"> H-8 </Link>
            <Link className="toplink" to="/hook9"> H-9 </Link>
            <Link className="toplink" to="/api1" >A-1</Link>
            <Link className="toplink" to="/api2" >A-2</Link>
            <Link className="toplink" to="/api3" >A-3</Link>
            <Link className="toplink" to="/api4" >A-4</Link>
            <Link className="toplink" to="/api5" >A-5</Link>
            <Link className="toplink" to="/api6" >A-6</Link>
            <Link className="toplink" to="/api7" >Emp</Link>
            <Link className="toplink" to="/api8" >Users</Link>
            <Link className="toplink" to="/api9" >Products</Link>
            <Link className="toplink" to="/api10/Praneshkumar/Bsc/Bangalore" >useParams</Link>
        </header>

        <Routes>
            <Route exact path="/api10/:fullname/:edu/:city" element={<ApiTen/>}/>
            <Route exact path="/api9" element={<ApiNine/>}/>
            <Route exact path="/api8" element={<ApiEight/>}/>
            <Route exact path="/api7" element={ <ApiSeven/> }/>
            <Route exact path="/api6" element={ <ApiSix/> }/>
            <Route exact path="/api5" element={ <ApiFive/> }/>
            <Route exact path="/api4" element={ <ApiFour/> }/>
            <Route exact path="/api3" element={ <ApiThree/> }/>
            <Route exact path="/api2" element={ <ApiTwo/> }/>
            <Route exact path="/api1" element={ <ApiOne/> }/>
            <Route exact path="/hook9" element={ <HookNine/> }/>
            <Route exact path="/hook8" element={ <HookEight/> }/>
            <Route exact path="/hook7" element={ <HookSeven/> }/>
            <Route exact path="/hook6" element={ <HookSix/> }/>
            <Route exact path="/hook5" element={ <HookFive/> }/>
            <Route exact path="/hook4" element={ <HookFour/> }/>
            <Route exact path="/hook3" element={ <HookThree/> }/>
            <Route exact path="/hook2" element={ <HookTwo/> }/>
            <Route exact path="/hook1" element={ <HookOne/> }/>
            <Route exact path="" element={ <Myhome/> }/>
            <Route exact path="/item" element={ <Itemlist/> }/>
            <Route exact path="/user" element={ <Myuser/> }/>
            <Route exact path="/product" element={ <Myproduct/> }/>
            <Route exact path="/customer" element={ <Mycustomer/> }/>
        </Routes>
    </HashRouter>
  );
}

export default App;

/*
  Myuser() - in javascript
  <Myuser/> - in jsx
*/