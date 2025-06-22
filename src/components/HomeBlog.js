import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Img3 from "../assets/Car_collection/cloth8.jpg";
import Img4 from "../assets/Car_collection/cloth5.jpg";
import Img5 from "../assets/Car_collection/cloth7.jpg";
import "./HomeBlog.css";
import { useNavigate } from "react-router-dom";

const HomeBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="home8">
      <h3>Blog</h3>
      <h1>News & Update</h1>
      <p>
        To contribute to positive change and achieve our sustainability goals
        with many extraordinary
      </p>
      <div className="h8-main">
        <div className="h8-sub-main1">
          <div style={{ position: "relative" }}>
            <img src={Img3} alt="car3" />
          </div>
          <button
            className="img-btn"
            style={{
              width: "90px",
              position: "absolute",
              color: "red",
              backgroundColor: "white",
            }}
          >
            History
          </button>
          <h1>Which Professional cloth is to choose?</h1>
          <p>Our offices are located on the traditional, unced.</p>
          <button
            onClick={() => {
              navigate("/history");
            }}
          >
            Read More
            <FaCheckCircle
              style={{
                color: "white",
                fontSize: "20px",
                marginLeft: "6px",
                marginBottom: "-3px",
              }}
            />
          </button>
        </div>

        <div className="h8-sub-main1">
          <div style={{ position: "relative" }}>
            <img src={Img4} alt="car3" />
          </div>
          <button
            className="img-btn"
            style={{
              width: "110px",
              position: "absolute",
              color: "red",
              backgroundColor: "white",
            }}
          >
            Branding
          </button>
          <h1>How will you know success when it shows?</h1>
          <p>Our offices are located on the traditional, unced.</p>
          <button
            onClick={() => {
              navigate("/branding");
            }}
          >
            Read More
            <FaCheckCircle
              style={{
                color: "white",
                fontSize: "20px",
                marginLeft: "6px",
                marginBottom: "-3px",
              }}
            />
          </button>
        </div>

        <div className="h8-sub-main1">
          <div style={{ position: "relative" }}>
            <img src={Img5} alt="car3" />
          </div>
          <button
            className="img-btn"
            style={{
              width: "155px",
              position: "absolute",
              color: "red",
              backgroundColor: "white",
            }}
          >
            Web Design
          </button>
          <h1>Things you should know about interior.</h1>
          <p>Our offices are located on the traditional, unced.</p>
          <button
            onClick={() => {
              navigate("/interior");
            }}
          >
            Read More
            <FaCheckCircle
              style={{
                color: "white",
                fontSize: "20px",
                marginLeft: "6px",
                marginBottom: "-3px",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
