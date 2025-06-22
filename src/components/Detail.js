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
  const [price, setPrice] = useState(cost * 83.5);
  const [mode, setMode] = useState("COD");
  const [credentials, SetCredentials] = useState("");

  const QuantityHandler = (value) => {
    QT > 0
      ? setQuantity(QT + value)
      : value > 0
      ? setQuantity(QT + value)
      : setQuantity(QT);
  };

  useEffect(() => {
    setPrice(QT * cost * 83.5);
  }, [QT, cost]);

  const DataCheck = (e) => {
    if (drop !== "" && pdate !== "" && d_date !== "") BookingHandler();
    else alert("Please provide all the required fields !");
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

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h1>Drop-of</h1>
          <select onChange={(e) => setDrop(e.target.value)}>
            <option>Select drop location</option>
            <option>LUCKNOW</option>
            <option>GKP</option>
            <option>DELHI</option>
            <option>BHTR</option>
          </select>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "7px",
          }}
        >
          <h1>From</h1>
          <input type="date" onChange={(e) => setPdate(e.target.value)} />
          <h1>To</h1>
          <input type="date" onChange={(e) => setD_date(e.target.value)} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
