import React,{ useEffect,useState} from "react";
import axios from "axios";

function Viewcart() {
    const [state, setState] = useState([]);
    let custid=localStorage.getItem('custId')
    const fetchCart = async () => {
      const response = await axios.get(`http://localhost:3500/viewcart/${custid}`);
      console.log(response.data.result);
      setState(response.data.result);
    };
    useEffect(() => {
      fetchCart();
    }, []);

    const handleClick = (a) => {
        axios.post(
            `http://localhost:3500/deletefood/${id}`
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
      <div>
        <ul style={{ listStyleType: "none" }}>
        {state.map((x) => ( 
            <li key={x._id}>
                <h3>Food name:{x.foodid.foodname}</h3>
                <div className="d-flex">
                <h3 className="me-5">Food price:{x.foodid.price}</h3>
                <h5>Quantity:{x.count}</h5>
                </div>
                <button onClick={()=>{handleClick(x._id)}}>delete item</button>
            </li>
        ))}
        <button>Order now</button>
        </ul>
      </div>
    )
  }
  
  export default Viewcart