import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import "./FindDeals.css";
import { useNavigate } from "react-router-dom";

const FindDeals = () => {
  const [h6divicon1, setH6divicon1] = useState(false);
  const [h6divicon2, setH6divicon2] = useState(false);
  const [h6divicon3, setH6divicon3] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="home6">
      <div className="h6-div1">
        <h4 style={{ color: "orangered", fontSize: "1.4rem" }}>
          Why Choose us
        </h4>
        <h1 style={{ width: "50%" }}>Best valued deals you will ever find</h1>
        <p>
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <button
          onClick={() => {
            navigate("/services");
          }}
        >
          Find Deals
          <FaCheckCircle
            style={{
              color: "white",
              fontSize: "18px",
              marginLeft: "4px",
            }}
          />
        </button>
      </div>

      <div className="h6-div2">
        <div>
          <div>
            <FaCarAlt
              style={{
                color: `${h6divicon1 ? "white" : "red"}`,
                fontSize: "40px",
                backgroundColor: `${h6divicon1 ? "red" : "#FBD5EA"}`,
                borderRadius: "50px",
                padding: "20px",
                cursor: "pointer",
              }}
              onMouseEnter={() => setH6divicon1(!h6divicon1)}
              onMouseLeave={() => setH6divicon1(!h6divicon1)}
            />
          </div>

          <div className="h6-div-wrapper">
            <h3>Cross Country Delivery</h3>
            <p style={{ width: "65%" }}>
              Speedily say has suitable disposal add boy. On forth doubt miles
              of child. Exercise joy man children rejoiced.
            </p>
          </div>
        </div>

        <div>
          <div>
            <FaDollarSign
              style={{
                color: `${h6divicon2 ? "white" : "red"}`,
                fontSize: "40px",
                backgroundColor: `${h6divicon2 ? "red" : "#FBD5EA"}`,
                borderRadius: "50px",
                padding: "20px",
                cursor: "pointer",
              }}
              onMouseEnter={() => setH6divicon2(!h6divicon2)}
              onMouseLeave={() => setH6divicon2(!h6divicon2)}
            />
          </div>

          <div className="h6-div-wrapper">
            <h3>All Inclusive Pricing</h3>
            <p style={{ width: "65%" }}>
              Speedily say has suitable disposal add boy. On forth doubt miles
              of child. Exercise joy man children rejoiced.
            </p>
          </div>
        </div>

        <div>
          <div>
            <FaRupeeSign
              style={{
                color: `${h6divicon3 ? "white" : "red"}`,
                fontSize: "40px",
                backgroundColor: `${h6divicon3 ? "red" : "#FBD5EA"}`,
                borderRadius: "50px",
                padding: "20px",
                cursor: "pointer",
              }}
              onMouseEnter={() => setH6divicon3(!h6divicon3)}
              onMouseLeave={() => setH6divicon3(!h6divicon3)}
            />
          </div>

          <div className="h6-div-wrapper">
            <h3>No Hidden Charges</h3>
            <p style={{ width: "65%" }}>
              Speedily say has suitable disposal add boy. On forth doubt miles
              of child. Exercise joy man children rejoiced.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDeals;
