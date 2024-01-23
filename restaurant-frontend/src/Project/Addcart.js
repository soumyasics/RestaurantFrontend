import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

function Addcart() {
  const [state, setState] = useState([]);
  const fetchFood =  async() => {
    const response = await axios.post(
      "http://localhost:3500/Addcart"
    )
    console.log(response.data.result);
    setState(response.data.result);
  };
  useEffect(() => {
    fetchFood();
  }, []);


  return (
    <div class="m-4">
      <ul style={{ listStyleType: 'none' }} class="p-3">
        {state.map((x) => (
          <div class="p-4 d-inline-flex ">
          <li key={x.id} class="m-3">
            <div class="shadow-lg p-3 bg-body-tertiary rounded" >
            
            <div>
              <h4 class="mt-3">{x.foodname}</h4>
                <h5>Price: {'\u20B9'}{x.price}</h5>
                <Link class="btn btn-primary" to="">
                Buy now
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

export default Addcart