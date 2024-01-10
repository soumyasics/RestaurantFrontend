import React, { useState } from 'react'

function Login() {
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
        <div class="form-control mx-auto d-block " style={{width:"18rem",marginTop:"7rem",backgroundColor:"lightpink"}}>
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
        </div>
    </form>
    </div>
  )
}

export default Login