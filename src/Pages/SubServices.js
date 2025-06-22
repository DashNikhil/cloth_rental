import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import "./Services.css";
import Detail from "../components/Detail";

const SubServices = ({ Img, price, name, ClothId }) => {
  const [detail, setDetail] = useState(false);
  const ClickHandler = () => {
    setDetail(!detail);
  };
  return (
    <div className="services-main">
      <div className="services-main-img">
        <img src={Img} alt="cloth_1" />
      </div>

      <div className="services-main-txt">
        <div className="services-main-txt1">
          <h3>{name}</h3>
          <p>
            <FaStar style={{ color: "gold", fontSize: "15px" }} />
            <FaStar
              style={{ color: "gold", fontSize: "15px", marginLeft: "2px" }}
            />
            <FaStar
              style={{ color: "gold", fontSize: "15px", marginLeft: "2px" }}
            />
            <FaStar
              style={{ color: "gold", fontSize: "15px", marginLeft: "2px" }}
            />
            <FaStarHalfAlt
              style={{ color: "gold", fontSize: "15px", marginLeft: "2px" }}
            />
          </p>
          <h5>Cloth_Id</h5>
        </div>

        <div className="services-main-txt2">
          <h5>
            <FaDollarSign
              style={{
                color: "orangered",
                fontSize: "27px",
                marginRight: "3px",
                marginBottom: "-6px",
              }}
            />
            {price} || ₹ {price * 83.5}
          </h5>

          <p>per day</p>
          <p>{ClothId}</p>
        </div>
      </div>

      <hr
        style={{
          backgroundColor: "red",
          height: "1px",
          marginTop: "10px",
        }}
      />
      <div style={{ textAlign: "center" }}>
        <button onClick={() => ClickHandler()}>
          Book Trial
          <FaCheckCircle
            style={{
              color: "white",
              fontSize: "20px",
              marginLeft: "2px",
              marginBottom: "-4px",
            }}
          />
        </button>
      </div>
      {detail ? (
        <Detail
          toggle={ClickHandler}
          ClothId={ClothId}
          cost={price}
          Img={Img}
          cType={name}
        />
      ) : null}
    </div>
  );
};

export default SubServices;
