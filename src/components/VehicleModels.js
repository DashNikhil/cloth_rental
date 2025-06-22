import React from "react";
import Img1 from "../assets/Car_collection/cloth6.jpg";
// import { FaCarAlt } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
// import { MdHomeRepairService } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import "./VehicleModels.css";

const VehicleModels = () => {
  return (
    <div className="home4">
      <h3 style={{ color: "rgb(227, 89, 58)", fontSize: "1.5rem" }}>
        Cloths Type
      </h3>

      <h1>Our rental fleet</h1>

      <p>
        To contribute to positive change and achieve our sustainability goals
        with many extraordinary
      </p>

      <div className="h4-div-main">
        <div className="h4-img">
          <img src={Img1} alt="car" />
        </div>

        <div className="h4-txt">
          <h3 style={{ color: "rgb(227, 89, 58)", fontSize: "1.3rem" }}>
            About Company
          </h3>
          <h1 style={{ width: "80%" }}>
            You wear the cloths and your adventure begins
          </h1>
          <p style={{ width: "80%", marginTop: "7px" }}>
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className="h4-icons">
            <div>
              <GiClothes style={{ color: "red", fontSize: "50px" }} />
              <h2>22</h2>
              <h4>Cloths Types</h4>
            </div>

            <div>
              <FaClipboardList style={{ color: "red", fontSize: "50px" }} />
              <h2>108</h2>
              <h4>Rental Outlets</h4>
            </div>

            <div>
              <FaExchangeAlt style={{ color: "red", fontSize: "50px" }} />
              <h2>101</h2>
              <h4>Exchange Shop</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleModels;
