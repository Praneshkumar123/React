import { HashRouter,Routes, Route, Link } from "react-router-dom";

import Mydashboard from "./dashboard";
import Myuser from "./user";
import Mybook from "./book";
import Myproduct from "./product";
import Myapi from "./api";


function App() {
  return (
    <HashRouter>
    
      <div className="container mt-3">
        <div className="row">
          <div className="col-xl-4 text-primary"><h2>React & Redux </h2></div>
          <div className="col-xl-8 text-end">
            <div className="btn-group">
              <Link className="btn btn-info" to="/">Dashboard</Link> 
              <Link className="btn btn-success" to="/api">Manage Post</Link>
              <Link className="btn btn-secondary" to="/product">Manage Product</Link>
              <Link className="btn btn-primary" to="/book">Manage Book </Link> 

              <Link className="btn btn-danger" to="/user">Manage User</Link>
            </div>
          </div>
        </div>
      </div>
      <Routes>
      <Route exact path="/" element={<Mydashboard/>} />
      <Route exact path="/user" element={<Myuser/>} />
      <Route exact path="/book" element={<Mybook/>}/>
      <Route exact path="/product" element={<Myproduct/>}/>
      <Route exact path="/api" element={<Myapi/>}/>
    </Routes>
    </HashRouter>
  );
}

export default App;