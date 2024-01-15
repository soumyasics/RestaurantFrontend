import React, { useState } from 'react'
import axios from 'axios';

function Stafflogin() {
    const [data,setData]=useState({
        email:"",
        password:""
    })

    const Changethename = (a) => {
        setData({...data,[a.target.name]:a.target.value})
    }
    const handleSubmit = (a) => {
        a.preventDefault()
        console.log(data)
        axios
      .post("http://localhost:3000/Login", data)
      .then((res) => {
        console.log(res);
        if(res.data.status===200){
            alert("Login Sucessfully");
        }
        else{
            alert(res.data.msg);
        }
      })
      .catch((err) => {
       console.log(err);
      });
    }
  return (
    <div >
    <form >
        <div class="form-control mx-auto d-block " style={{width:"21rem",marginTop:"7rem",backgroundColor:"skyblue"}}>
        <div class="p-2 w-100" > <h2 class="text-center mt-3 mb-3" >Login Form</h2></div>
        <div class="d-flex p-2" >
            <label class="form-label mt-2" style={{width:"5rem"}}>Username: </label>
            <input class="form-control " style={{width:"13rem"}} placeholder='Enter email' type='email' onChange={Changethename} name='email'></input>
        </div>
        <div class="d-flex p-2" >
            <label class="form-label mt-2" style={{width:"5rem"}}>Password: </label>
            <input  class="form-control " style={{width:"13rem"}} placeholder='Enter Password' type='password' name='password' onChange={Changethename}></input>
        </div>
        <div class="text-center mt-3 mb-3"><button class="w-50 btn btn-primary" onClick={handleSubmit}>Sign in</button></div>
        <div class="text-center mt-3 mb-3"><a href='/Forgetpassword' style={{textDecoration:"none",color:"red"}}>Forgetpassword</a></div>
        </div>
    </form>
    </div>
  )
}

export default Stafflogin
