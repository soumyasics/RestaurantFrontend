import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Register from './Project/Register';

import Nav from "./Project/Nav";
import Forgetpassword from "./Project/Forgetpassword";
import Stafflogin from './Project/Stafflogin';

function App() {
  
  return (
    <div>
      
    <BrowserRouter>
    <Nav/>

    <Routes>
   
 
  
      <Route exact path="/Stafflogin" element={<Stafflogin/>}/>
      <Route exact path="/Register" element={<Register/>}/>
      <Route exact path="/Forgetpassword" element={<Forgetpassword/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
