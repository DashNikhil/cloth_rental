import React, { useEffect, useState } from "react";
import "./Bookings.css";
import { baseURL } from "../URL";

const Bookings = () => {
  const [booking_Data, setBooking_data] = useState([]);
  const [status, setBstatus] = useState("");
  const [ClothId, setID] = useState("");
  const auth = localStorage.getItem("myData");
  useEffect(() => {
    fetch(`${baseURL}/book`)
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        return result.result;
      })
      .then((data) => setBooking_data(data));

    // console.log(status, ClothId);

    const Update = () => {
      fetch(`${baseURL}/book`, {
        method: "PUT",
        body: JSON.stringify({ ClothId, status }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => {
          return data.json();
        })
        .then((result) => alert(result.message))
        .catch((err) => {
          console.log(err);
        });
    };
    {
      auth
        ? JSON.parse(auth).role === "admin"
          ? Update()
          : console.log("User")
        : console.log("You have not logged in till now.");
    }
  }, [status, ClothId, auth]);

  const ChangeHandler = (st, stid) => {
    setBstatus(st);
    setID(stid);
  };

  return (
    <div className="product-list">
      <ul style={{ backgroundColor: "black", color: "red" }}>
        <li>Category </li>
        <li>ClothId</li>
        <li>QT</li>
        <li>Price</li>
        <li>Drop </li>
        <li>Booked ON</li>
        <li>Booked Off</li>
        <li>Status</li>
      </ul>
      {booking_Data.length > 0 ? (
        booking_Data.map((item) => (
          <ul key={item._id}>
            <li>{item.cType}</li>
            <li>{item.ClothId}</li>
            <li>{item.QT}</li>
            <li>{item.price === "COD" ? item.price : "₹" + item.price}</li>
            <li>{item.drop}</li>
            <li>{item.pdate}</li>
            <li>{item.d_date}</li>
            {auth ? (
              JSON.parse(auth).role === "admin" ? (
                <li style={{ padding: "0px", border: "0px", width: "13%" }}>
                  <select
                    onChange={(e) =>
                      ChangeHandler(e.target.value, item.ClothId)
                    }
                  >
                    <option>{item.status}</option>
                    <option>Booked</option>
                    <option>Completed</option>
                    <option>Returned</option>
                  </select>
                </li>
              ) : (
                <li>{item.status}</li>
              )
            ) : (
              <li>{item.status}</li>
            )}
          </ul>
        ))
      ) : (
        <h1>No Bookings Found</h1>
      )}
    </div>
  );
};

export default Bookings;
