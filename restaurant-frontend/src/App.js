import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Project/Login';
import Register from './Project/Register';
import Nav from './Project/Nav';







function App() {
  return (
    <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route exact path="/Login" element={<Login/>}/>
    <Route exact path="/Register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>

 </div>
 
  
  );
}

export default App;
