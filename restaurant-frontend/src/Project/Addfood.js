import React, { useState } from "react";
import axios from "axios";

function Addfood() {
  const [data, setData] = useState({
    foodname: "",
    image: "",
    price: "",
    descripition: "",
  });

  const handleChange = (a) => {
    if (a.target.name === "image") {
      const file = a.target.files[0];
      setData({ ...data, image: file });
    }
    else{
      setData({ ...data, [a.target.name]: a.target.value });
    }
  };

  const handleSubmit = (a) => {
    a.preventDefault();
    console.log(data);
    axios
      .post("http://localhost:3500/addfood", data,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
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
  };

  return (
    <div>
      <form>
        <div>Add food items</div>
        <div>
          <label>Food name:</label>
          <input
            type="text"
            placeholder="Enter the food name"
            name="foodname"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Food image:</label>
          <input type="file" name="image" onChange={handleChange}></input>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="tel"
            placeholder="Enter the price"
            name="price"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Descripition:</label>
          <textarea
            type="text"
            placeholder="Enter the Descripition"
            name="descripition"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button onClick={handleSubmit}>Add item</button>
        </div>
      </form>
    </div>
  );
}

export default Addfood;
