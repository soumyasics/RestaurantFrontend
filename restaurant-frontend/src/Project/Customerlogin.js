import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Customerlogin() {
  const mainnavigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const Changethename = (a) => {
    setData({ ...data, [a.target.name]: a.target.value });
  };
  const handleSubmit = (a) => {
    a.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:3500/userlogin", data)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert(res.data.msg);
          localStorage.setItem("custId", res.data.result._id);
          localStorage.setItem("fname", res.data.result.fname);
          mainnavigate("/viewfood");
          window.location.reload(false);
        } else {
          alert(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mb-5">
      <form>
        <div
          className="form-control mx-auto d-block "
          style={{
            width: "21rem",
            marginTop: "7rem",
            backgroundColor: "skyblue",
          }}
        >
          <div className="p-2 w-100">
            {" "}
            <h2 className="text-center mt-3 mb-3">Customer Login</h2>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2" style={{ width: "5rem" }}>
              Username:{" "}
            </label>
            <input
              className="form-control "
              style={{ width: "13rem" }}
              placeholder="Enter email"
              type="email"
              onChange={Changethename}
              name="email"
            ></input>
          </div>
          <div className="d-flex p-2">
            <label className="form-label mt-2" style={{ width: "5rem" }}>
              Password:{" "}
            </label>
            <input
              className="form-control "
              style={{ width: "13rem" }}
              placeholder="Enter Password"
              type="password"
              name="password"
              onChange={Changethename}
            ></input>
          </div>
          <div className="text-center mt-3 mb-3">
            <button className="w-50 btn btn-primary" onClick={handleSubmit}>
              Sign in
            </button>
          </div>
          <div className="text-center mt-3 mb-3">
            <a
              href="/Forgetpassword"
              style={{ textDecoration: "none", color: "red" }}
            >
              Forget password
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Customerlogin;
