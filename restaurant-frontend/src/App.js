
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Nav from "./Project/Nav";
import Forgetpassword from "./Project/Forgetpassword";
import Home from './Project/Home';
import Customerlogin from "./Project/Customerlogin";
import Customerregister from "./Project/Customerregister";
import Staffregister from "./Project/Staffregister";
import Stafflogin from "./Project/Stafflogin";
import Staffpassword from "./Project/Staffpassword";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route exact path="/Customerregister" element={<Customerregister/>}/>
      <Route exact path="/Customerlogin" element={<Customerlogin/>}/>
      <Route exact path="/Forgetpassword" element={<Forgetpassword/>}/>
      <Route exact path='/Home' element={<Home/>}/>
      <Route exact path="/Staffregister" element={<Staffregister/>}/>
      <Route exact path="/stafflogin" element={<Stafflogin/>}/>
      <Route exact path="/staffpassword" element={<Staffpassword/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
