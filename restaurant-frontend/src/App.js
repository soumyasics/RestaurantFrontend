import react from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js" 
import Login from './Project/Login';
import Home from './Project/Home';
import Nav from './Project/Nav';
import {BrowserRouter,Route,Routes}from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav/>


      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/Login' element={<Login/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
