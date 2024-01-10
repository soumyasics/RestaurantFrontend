import React, { useState } from 'react'

function Login() {
<<<<<<< HEAD
    const[state ,setState]=useState({
        username:"",
        password:"",
    })
    function Change(a){
        setState({...state,[a.target.name]:a.target.value})
    }
      function Submit(a){
      a.preventDefault()
      console.log(state);
    }
    
  return (
    <div class="form-control d-flex mx-auto" style={{width:"21rem",marginTop:'8rem',backgroundColor:'pink'}}>
    <form onSubmit={Submit}>
        <h1 class="text-center mt-3 mb-3">Login</h1>
        <div  class="d-flex p-2">
            <label class="form-label mt-2 w-50">Username:</label>
            <input class="form-control"type="text" placeholder='Username' name='username'onChange={Change}></input>
        </div>
        <div class="d-flex p-2">
            <label class="form-label mt-2 w-50">Password:</label>
            <input class="form-control"type="password" placeholder='Password' name='password'onChange={Change}></input>
        </div>
        <div class="text-center mt-3 mb-3">
        <button style={{backgroundColor:"red"}}>Login</button>
=======
    const [data,setData]=useState({
        username:"",
        password:""
    })

    const Changethename = (a) => {
        setData({...data,[a.target.name]:a.target.value})
    }
    const handleSubmit = (a) => {
        a.preventDefault()
        console.log(data)
    }
  return (
    <div >
    <form >
        <div class="form-control mx-auto d-block " style={{width:"18rem",marginTop:"7rem",backgroundColor:"skyblue"}}>
        <div class="p-2 w-100" > <h2 class="text-center mt-3 mb-3" >Login Form</h2></div>
        <div class="d-flex p-2" >
            <label class="form-label mt-2" style={{width:"5rem"}}>Username: </label>
            <input class="form-control " style={{width:"10rem"}} placeholder='Enter Username' type='text' onChange={Changethename} name='username'></input>
        </div>
        <div class="d-flex p-2" >
            <label class="form-label mt-2" style={{width:"5rem"}}>Password: </label>
            <input  class="form-control " style={{width:"10rem"}} placeholder='Enter Password' type='password' name='password' onChange={Changethename}></input>
        </div>
        <div class="text-center mt-3 mb-3"><button class="w-50 btn btn-primary" onClick={handleSubmit}>Sign in</button></div>
>>>>>>> 7dc0edd235223b0e9e8acb729db9e9a89f2ccb0a
        </div>
    </form>
    </div>
  )
}

export default Login