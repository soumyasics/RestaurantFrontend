import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Viewcart() {
  const [state, setState] = useState([]);
  let total = 0;
  let custid = localStorage.getItem("custId");
  const fetchCart = async () => {
    const response = await axios.get(
      `http://localhost:3500/viewcart/${custid}`
    );
    console.log(response.data.result);
    setState(response.data.result);
  };
  useEffect(() => {
    fetchCart();
  }, []);

  const handleDelete = () => {
    axios
      .post("http://localhost:3500/deletecartitem")
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          window.location.reload(false);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheckout = () => {
    axios.post("http://localhost:3500/addorder",{state:state})
    .then((res) => {
      console.log(res);
      if (res.data.status === 200) {
        alert(res.data.msg);
      } else {
        alert(res.data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      {custid ? (
        <ul
          style={{ listStyleType: "none", width: "56rem" }}
          className="p-5 pt-0 mx-auto"
        >
          {state.map((x) => (
            <li
              key={x._id}
              className="d-flex justify-content-between shadow-lg p-3 bg-body-tertiary rounded mb-4 container-fluid"
              onChange={(total = total + x.count * x.foodid.price)}
            >
              <img
                src={`http://localhost:3500/${x.foodid.image}`}
                className="img-fluid"
                alt="..."
                style={{ width: "8rem", height: "8rem" }}
              />
              <div>
                <h3 className="mt-2 ms-3">{x.foodid.foodname}</h3>
                <div className="d-flex mt-5 ms-3">
                  <h5 className="me-5">
                    Food price:{" "}
                    <span className="ms-1">
                      {x.count} x {x.foodid.price} = {"\u20B9"}{" "}
                      {x.count * x.foodid.price}
                    </span>
                  </h5>
                  <h5 className="me-5 ms-3">
                    Quantity: <span className="ms-1">{x.count}</span>
                  </h5>
                </div>
              </div>
              <button
                onClick={handleDelete}
                style={{ height: "2.5rem" }}
                className="mt-5 btn btn-danger"
              >
                delete item
              </button>
            </li>
          ))}
          <p className="mt-3 mb-3 me-4 text-end fs-5 fw-semibold">
            Total :{" "}
            <span>
              {"\u20B9"} {total}
            </span>
          </p>
          <div className="d-grid me-3 justify-content-md-end">
            <button className="btn btn-success me-md-2" onClick={handleCheckout}> <Link
                to="/payment"
                className="link-light link-underline-opacity-0"
              >
                Check out
              </Link></button>
          </div>
        </ul>
      ) : (
        <p className="mt-5 mb-3 me-4 text-center fs-3 fw-semibold">Please login to view the cart</p>
      )}
    </div>
  );
}

export default Viewcart;
