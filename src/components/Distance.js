import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import "./Distance.css";
import { baseURL } from "../URL";

const Distance = () => {
  const [ClothId, setClothId] = useState("");
  const [cType, setcType] = useState("");
  const [drop, setDrop] = useState("");
  const [pdate, setPdate] = useState("");
  const [ptime, setPtime] = useState("");
  const [d_date, setD_date] = useState("");
  const [d_time, setD_time] = useState("");

  const CheckData = (e) => {
    e.preventDefault();
    if (
      ClothId !== "" &&
      cType !== "" &&
      drop !== "" &&
      pdate !== "" &&
      d_date !== ""
    )
      OnSubmit(e);
    else alert("Please fill all the required fields !");
  };

  const OnSubmit = async (e) => {
    e.preventDefault();
    // console.log(ClothId);
    const user = await fetch(`${baseURL}/book`, {
      method: "POST",
      body: JSON.stringify({
        ClothId,
        cType,
        drop,
        pdate,
        ptime,
        d_date,
        d_time,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let result = await user.json();
    result = result.result;
    console.log(result);
    setClothId("");
    setcType("");
    setDrop("");
    setPdate("");
    setPtime("");
    setD_date("");
    setD_time("");
  };
  return (
    <div className="home2">
      <form className="h2-form">
        <h1>Rent your Cloth (COD)</h1>
        <div className="f1">
          <div style={{ marginRight: "10px" }}>
            <BsCartCheckFill
              style={{
                color: "red",
                fontSize: "20px",
                marginRight: "7px",
                marginBottom: "-5px",
              }}
            />
            Select your Cloth type
            <br></br>
            <select onChange={(e) => setcType(e.target.value)} value={cType}>
              <option>Select your Cloth type</option>
              <option>Professional</option>
              <option>Wedding</option>
              <option>Sport</option>
              <option>Formal</option>
              <option>Fashion</option>
            </select>
          </div>

          <div style={{ marginRight: "10px" }}>
            <MdLocationOn
              style={{
                color: "red",
                fontSize: "20px",
                marginRight: "5px",
                marginBottom: "-5px",
              }}
            />
            Cloth_ID<br></br>
            <input
              placeholder="Enter Cloth_ID"
              value={ClothId}
              onChange={(e) => setClothId(e.target.value)}
              style={{
                marginTop: "10px",
                padding: "10px 7px",
                fontSize: "1.1rem",
                border: "1px solid rgb(237, 160, 142)",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            />
          </div>

          <div>
            <MdLocationOn
              style={{
                color: "red",
                fontSize: "20px",
                marginRight: "5px",
                marginBottom: "-5px",
              }}
            />
            Drop-of<br></br>
            <select onChange={(e) => setDrop(e.target.value)} value={drop}>
              <option>Select drop location</option>
              <option>LUCKNOW</option>
              <option>GKP</option>
              <option>DELHI</option>
              <option>BHTR</option>
            </select>
          </div>
        </div>

        <div className="f2">
          <div style={{ marginRight: "10px" }}>
            <FaCalendarAlt
              style={{
                color: "red",
                fontSize: "20px",
                marginRight: "5px",
                marginBottom: "-5px",
              }}
            />
            Pick-up<br></br>
            <input
              type="date"
              onChange={(e) => setPdate(e.target.value)}
              value={pdate}
            />
            <select
              style={{ marginLeft: "5px" }}
              onChange={(e) => setPtime(e.target.value)}
              value={ptime}
            >
              <option>9:00AM</option>
              <option>10:00AM</option>
              <option>11:00AM</option>
            </select>
          </div>

          <div style={{ marginRight: "10px" }}>
            <FaCalendarAlt
              style={{
                color: "red",
                fontSize: "20px",
                marginRight: "5px",
                marginBottom: "-5px",
              }}
            />
            Drop-of<br></br>
            <input
              type="date"
              onChange={(e) => setD_date(e.target.value)}
              value={d_date}
            />
            <select
              style={{ marginLeft: "5px" }}
              onChange={(e) => setD_time(e.target.value)}
              value={d_time}
            >
              <option>9:00AM</option>
              <option>10:00AM</option>
              <option>11:00AM</option>
            </select>
          </div>

          <div>
            {/* <FaSearch
              style={{
                color: "red",
                fontSize: "20px",
                marginRight: "5px",
                marginBottom: "-5px",
              }}
            /> Book*/}
            <br></br>
            <button onClick={CheckData}>Book</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Distance;
