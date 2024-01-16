import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

function Viewfood() {
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


  return (
    <div>
      <ul style={{ listStyleType: 'none' }} class="p-2 mt-0 ">
        {state.map((x) => (
          <div class="p-2 d-inline-flex">
          <li key={x.id} class="mt-0 ">
            <div class="card align-top" style={{width: "22rem",height:"39rem"}}>
            <img src={`http://localhost:3500/${x.image}`} class="card-img-top ms-4 mt-3" alt={x.decripition} style={{width: "19rem",height:"23rem"}}/><br></br>
            <div class="card-body">
              <h4 class="card-title">{x.foodname}</h4>
                <h5>Price: {'\u20B9'}{x.price}</h5>
                <Link class="btn btn-primary" to="">
                Order
              </Link>
              <Link class="btn btn-primary" style={{margin:20}}to="">
                Add to cart
              </Link>
              </div>
            </div><br></br>
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Viewfood