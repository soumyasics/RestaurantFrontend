import React, { useState } from 'react'

function Login() {
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
        </div>
    </form>
    </div>
  )
}

export default Login