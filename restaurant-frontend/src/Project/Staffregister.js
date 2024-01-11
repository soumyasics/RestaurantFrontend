import React, { useState } from "react";
import axios from "axios";

function Staffregister() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    dob: "",
    gender: "",
    password: "",
    confirmpassword: "",
    email: "",
    salary: "",
    contactno: "",
    designation: "",
  });

  const handleChange = (a) => {
    setData({ ...data, [a.target.name]: a.target.value });
  };

  const handleSubmit = (a) => {
    a.preventDefault();
    if (data.password === data.confirmpassword) {
      console.log(data);
      axios
        .post("http://localhost:3500/staffregistration", data)
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
    } else {
      alert("Password and Confirm password must be same");
    }
  };

  return (
    <div>
      <div
        class="form-control d-flex mx-auto"
        style={{ width: "28rem", backgroundColor: "orange" }}
      >
        <form>
          <h2 class="text-center mt-4 mb-3">Staff Registration</h2>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50" for="fname">
              First Name:
            </label>
            <input
              id="fname"
              class="form-control "
              style={{ width: "20rem" }}
              type="text"
              name="fname"
              placeholder="Enter First Name"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50" for="lname">
              Last Name:
            </label>
            <input
              id="lname"
              class="form-control "
              style={{ width: "20rem" }}
              type="text"
              name="lname"
              placeholder="Enter Last Name"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50">D.O.B:</label>
            <input
              class="form-control "
              style={{ width: "20rem" }}
              type="date"
              name="dob"
              placeholder="Enter Date of Birth"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50">Gender:</label>
            <div style={{ width: "20rem" }}>
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                required
                class="p-0 mx-2 form-check-input"
                style={{ marginTop: "0.8rem" }}
              ></input>
              <label class="form-label mt-2 " for="male">Male</label>
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                required
                class="p-0 mx-2 form-check-input"
                style={{ marginTop: "0.8rem" }}
              ></input>
              <label class="form-label mt-2" for="female">Female</label>
            </div>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50" for="email">
              Email:
            </label>
            <input
              id="email"
              class="form-control"
              style={{ width: "20rem" }}
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50" for="password">
              Password:
            </label>
            <input
              id="password"
              class="form-control"
              style={{ width: "20rem" }}
              type="password"
              name="password"
              placeholder="Enter password"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50" for="confirmpassword">
              Confirm Password:
            </label>
            <input
              id="confirmpassword"
              class="form-control"
              style={{ width: "20rem" }}
              type="password"
              name="confirmpassword"
              placeholder="Enter Confirm password"
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50" for="salary">
              Salary:
            </label>
            <div class="input-group" style={{ width: "20rem" }}>
              <span class="input-group-text">
                Rs.
              </span>
              <input
                type="tel"
                id="salary"
                class="form-control"
                placeholder="Enter Salary"
                name="salary"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50" for="contact">
              Contact No.:
            </label>
            <input
              id="contact"
              class="form-control"
              style={{ width: "20rem" }}
              type="tel"
              name="contactno"
              placeholder="Enter Contact No."
              maxLength={10}
              minLength={10}
              required
              onChange={handleChange}
            ></input>
          </div>
          <div class="d-flex p-2">
            <label class="form-label mt-2 w-50" for="designation">
                Designation:
            </label>
            <textarea id="designation"
              class="form-control"
              style={{ width: "20rem" }}
              type="text"
              name="designation"
              placeholder="Enter Desigination"
              required
              onChange={handleChange}></textarea>
          </div>
          <div class="text-center mt-3 mb-3">
            <button class="w-25 btn btn-success" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Staffregister;
