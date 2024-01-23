import React, { useEffect, useState } from "react";
import axios from "axios";

function Addcart() {
  const [state, setState] = useState([]);

  const fetchFood = async () => {
    const response = await axios.get("http://localhost:3500/viewcart");
    console.log(response.data.result);
    setState(response.data.result);
  };
  useEffect(() => {
    fetchFood();
  }, []);
  
  return (
    <div>
        <ul style={{ listStyleType: 'none' }}>
        {state.map((x) => (
          <div>
            <h5>Date: {x.date}</h5>
            <h3>Customer name: {}</h3>
            <h4>food Details</h4>
          <li key={x.id} className="mt-0 d-flex">
            <p className="me-3">food name:{}</p>
            <p>Quantity:{x.count}</p>
          </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Addcart