import React, { useEffect, useState } from "react";
import "./Detail.css";
import { baseURL } from "../URL";
import QR from "../assets/Car_collection/QR.jpeg";
import Net from "../assets/Car_collection/Net.png";

const Detail = ({ ClothId, cost, toggle, Img, cType }) => {
  const name = cType;
  const [QT, setQuantity] = useState(1);
  const [drop, setDrop] = useState("");
  const [pdate, setPdate] = useState("");
  const [d_date, setD_date] = useState("");
  const [price, setPrice] = useState(cost * 93.5);
  const [mode, setMode] = useState("COD");
  const [credentials, SetCredentials] = useState("");

  const QuantityHandler = (value) => {
    QT > 1
      ? setQuantity(QT + value)
      : value > 0
        ? setQuantity(QT + value)
        : setQuantity(QT);
  };

  useEffect(() => {
    setPrice(QT * cost * 93.5);
  }, [QT, cost]);

  const DataCheck = (e) => {
    if (drop !== "" && pdate !== "" && d_date !== "") BookingHandler();
    else {
      if (drop === "") alert("Please select Drop Location!");
      else if (pdate === "") alert("Please select Booking date!");
      else if (d_date === "") alert("Please select Return Date!");
      else alert("Please provide all the required fields !");
    }
  };

  const BookingHandler = async () => {
    const user = await fetch(`${baseURL}/book`, {
      method: "POST",
      body: JSON.stringify({
        ClothId,
        cType,
        drop,
        pdate,
        d_date,
        price,
        QT,
        credentials,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let result = await user.json();
    result = result.result;
    console.log(result.ClothId);
    toggle();
  };

  const SelectDate = (d) => {
    let temp = new Date();
    let temp1 = new Date(d);
    // console.log( temp.getTime() >= temp1.getTime());
    // setPdate(d);
    if (temp1.getTime() >= temp.getTime()) {
      setPdate(d);
    } else {
      alert("Booking is not possible in past days!");
      setPdate("");
    }
  };

  const ReturnDate = (d) => {
    if (pdate) {
      let temp = new Date(pdate);
      let temp1 = new Date(d);
      if (temp1.getTime() >= temp.getTime()) {
        setD_date(d);
      } else {
        alert("Return can not be done before booking!");
      }
    } else {
      alert("Please! First select start date.");
    }
  };

  return (
    <div className="detail">
      <div className="detail-inner">
        <img src={Img} alt={name} />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h1>Cloth_ID</h1>
          <h2>{ClothId}</h2>
        </div>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h1>Price</h1>
          <h2>
            ${cost * QT} ||{" "}
            <span style={{ color: "black" }}>₹{cost * QT * 83.5}</span>
          </h2>
        </div>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h1>Quantity</h1>
          <h2>
            <span onClick={() => QuantityHandler(-1)}>-</span>
            {QT}
            <span onClick={() => QuantityHandler(1)}>+</span>
          </h2>
        </div>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h1>Category</h1>
          <h2>{name}</h2>
        </div>

        <div className="pickup">
          <h1>Drop-of</h1>
          <select onChange={(e) => setDrop(e.target.value)}>
            <option>Select drop location</option>
            <option>LUCKNOW</option>
            <option>GKP</option>
            <option>DELHI</option>
            <option>BHTR</option>
          </select>
        </div>

        <div className="date">
          <h1>From</h1>
          <input type="date" onChange={(e) => SelectDate(e.target.value)} />
          <h1>To</h1>
          <input type="date" onChange={(e) => ReturnDate(e.target.value)} />
        </div>

        <div className="payment">
          <h1>Payment Mode</h1>
          <select onChange={(e) => setMode(e.target.value)}>
            <option>COD</option>
            <option>UPI Transfer</option>
            <option>Net Banking</option>
          </select>
        </div>

        <div style={{ width: "100%" }}>
          {mode === "UPI Transfer" ? (
            <>
              <img src={QR} alt="QR Code" style={{ width: "40%" }} />
              <h1 style={{ marginLeft: "50px" }}>Enter Credentials</h1>
              <input
                style={{ width: "60%", marginLeft: "55px" }}
                type="text"
                value={credentials}
                placeholder="Enter your Credentials for payment verification."
                onChange={(e) => SetCredentials(e.target.value)}
              />
            </>
          ) : null}
          {mode === "Net Banking" ? (
            <>
              <img
                src={Net}
                alt="Net Bnaking Details"
                style={{ width: "100%" }}
              />
              Enter Credentials:{" "}
              <input
                style={{ width: "60%" }}
                type="text"
                value={credentials}
                placeholder="Enter your Credentials for payment verification."
                onChange={(e) => SetCredentials(e.target.value)}
              />
            </>
          ) : null}
        </div>
        <button onClick={DataCheck} className="submit-btn">
          Book
        </button>

        <button className="detail-btn " onClick={toggle}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Detail;
