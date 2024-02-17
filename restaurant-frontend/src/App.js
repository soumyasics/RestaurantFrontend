
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
import Addfood from "./Project/Addfood";
import Viewfood from "./Project/Viewfood";
import Viewcart from "./Project/Viewcart";
import Payment from "./Project/Payment";
import Editfood from "./Project/Editfood";
import Editfooddetails from "./Project/Editfooddetails";
import Footer from "./Project/Footer";
import ViewOrders from "./Project/ViewOrders";
import Adminlogin from "./Project/Adminlogin";
import Adminnav from "./Project/Adminnav";
import Adminviewfood from "./Project/Adminviewfood";
import Customerorders from "./Project/Customerorders";
import Staffviewfood from "./Project/Staffviewfood";
import Stafforderconfirm from "./Project/Stafforderconfirm";
import Staffvieworder from "./Project/Staffvieworder";
import Stafforders from "./Project/Stafforders";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={[<Nav/>,<Home/>]}/>
      <Route exact path="/admin" element={<Adminlogin/>}/>
      <Route exact path="/Customerregister" element={[<Nav/>,<Customerregister/>]}/>
      <Route exact path="/Customerlogin" element={[<Nav/>,<Customerlogin/>]}/>
      <Route exact path="/Forgetpassword" element={[<Nav/>,<Forgetpassword/>]}/>
      <Route exact path='/admin/Home' element={[<Adminnav/>,<Home/>]}/>
      <Route exact path="/Staffregister" element={[<Nav/>,<Staffregister/>]}/>
      <Route exact path="/stafflogin" element={[<Nav/>,<Stafflogin/>]}/>
      <Route exact path="/staffpassword" element={[<Nav/>,<Staffpassword/>]}/>
      <Route exact path="/viewfood" element={[<Nav/>,<Viewfood/>]}/>
      <Route exact path="/staffviewfood" element={[<Nav/>,<Staffviewfood/>]}/>
      <Route exact path="/admin/addfood" element={[<Adminnav/>,<Addfood/>]}/>
      <Route exact path="/admin/viewfood" element={[<Adminnav/>,<Adminviewfood/>]}/>
      <Route exact path="/admin/editfood" element={[<Adminnav/>,<Editfood/>]}/>
      <Route exact path="/admin/viewcustomerorder" element={[<Adminnav/>,<Customerorders/>]}/>
      <Route exact path="/admin/editfooddetails/:id" element={[<Adminnav/>,<Editfooddetails/>]}/>
      <Route exact path="/viewcart" element={[<Nav/>,<Viewcart/>]}/>
      <Route exact path="/payment" element={[<Nav/>,<Payment/>]}/>
      <Route exact path="/orderconfirm" element={[<Nav/>,<Stafforderconfirm/>]}/>
      <Route exact path="/vieworders" element={[<Nav/>,<ViewOrders/>]}/>
      <Route exact path="/staffvieworders" element={[<Nav/>,<Staffvieworder/>]}/>
      <Route exact path="/admin/viewstafforder" element={[<Adminnav/>,<Stafforders/>]}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
