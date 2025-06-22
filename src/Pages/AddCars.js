import React, { useState } from "react";
import "./AddCars.css";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../URL";

const AddCars = () => {
  const [imgUrl, setCarurl] = useState("");
  const [carname, setCarname] = useState("");
  const [carprice, setCarprice] = useState("");

  let navigate = useNavigate();

  const ResetHandler = () => {
    setCarurl("");
    setCarname("");
    setCarprice("");
  };

  const FinalSubmit = async () => {
    const user = await fetch(`${baseURL}/addCars`, {
      method: "POST",
      body: JSON.stringify({
        imgUrl,
        carname,
        carprice,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = user.json();
    console.log(result);
    navigate("/services");
  };

  const SubmitHandler = () => {
    // console.log(imgUrl, carname, carprice);
    FinalSubmit();
    ResetHandler();
  };
  return (
    <div className="addcar">
      <div className="addcar-main">
        <h1>Add Cloths</h1>
        <h5>Cloth Image Url Address</h5>
        <input
          type="text"
          value={imgUrl}
          onChange={(e) => setCarurl(e.target.value)}
          placeholder="Enter your Cloth Image Address"
        />
        <h5>Cloth Name</h5>
        <input
          type="text"
          value={carname}
          onChange={(e) => setCarname(e.target.value)}
          placeholder="Enter name of your Cloth"
        />
        <h5>Cloth Rental Price</h5>
        <input
          type="number"
          value={carprice}
          onChange={(e) => setCarprice(e.target.value)}
          placeholder="Enter one day rent price"
        />
        <div>
          <button onClick={SubmitHandler}>Submit</button>
          <button onClick={ResetHandler}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default AddCars;
