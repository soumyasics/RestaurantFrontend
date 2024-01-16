import React, { useEffect, useState } from "react";
import axios from "axios";

function Deletefood() {
    const [state, setState] = useState([]);
  const fetchFood =  async() => {
    const response = await axios.get(
      "http://localhost:3500/viewfood"
    );
    console.log(response.data.result);
    setState(response.data.result);
  };
  useEffect(() => {
    fetchFood();
  }, []);

  const handleClick = (a) => {
    axios.post(
        "http://localhost:3500/deletefood"
      )
    .then((res)=>{
        console.log(res);
        if (res.data.status === 200) {
            window.location.reload(false)
          } else {
            console.log(res.data.msg);
          }
    })
    .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div class="m-4">
      <ul style={{ listStyleType: 'none' }} class="p-3">
        {state.map((x) => (
          <div class="p-4 d-inline-flex ">
          <li key={x.id} class="m-3">
            <div class="shadow-lg p-3 bg-body-tertiary rounded" >
            <img src={`http://localhost:3500/${x.image}`
          } class="img-fluid" alt="..." style={{width: "15rem",height:"15rem"}}/><br></br>
            <div>
              <h4 class="mt-3">{x.foodname}</h4>
                <h5>Price: {'\u20B9'}{x.price}</h5>
                <button class="btn btn-primary" onClick = {handleClick}>
                Delete item
              </button>
              </div>
            </div><br></br>
          </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Deletefood