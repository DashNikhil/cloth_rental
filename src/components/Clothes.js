import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Clothes.css";

const Clothes = ({ Img, index, flag }) => {
  const navigate = useNavigate();
  return (
    <div className="slide-main">
      <div
        className="each-slide-effect car"
        style={{
          backgroundImage: `url(${Img})`,
        }}
      >
        <p>BOOK your Cloth {index} NOW</p>
        <h1 className="txt-h1">FAST AND AFFORDABLE</h1>

        <h3
          className="text"
          style={flag ? { color: "rgb(40, 18, 239)" } : { color: "white" }}
        >
          To contribute to positive change and achieve our sustainability goals
          with many extraordinary
        </h3>
        <div className="btn-div">
          <h3
            className="txt-h3"
            style={flag ? { color: "white" } : { color: "rgb(239, 99, 18)" }}
          >
            599₹/Day
          </h3>

          <button
            className="btn"
            onClick={() => {
              navigate("/services");
            }}
          >
            Cloth Trial
            <FaCheckCircle
              style={{
                color: "white",
                fontSize: "18px",
                marginLeft: "5px",
                marginBottom: "-2px",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
