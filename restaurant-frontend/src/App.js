
import React from "react";
import Login from "./Project/Custumerlogin";
import Register from "./Project/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Nav from "./Project/Nav";
import Forgetpassword from "./Project/Forgetpassword";
import Home from './Project/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route exact path="/Login" element={<Login/>}/>
      <Route exact path="/Register" element={<Register/>}/>
      <Route exact path="/Forgetpassword" element={<Forgetpassword/>}/>
      <Route exact path='/Home' element={<Home/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
