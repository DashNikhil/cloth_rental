import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./Offer.css";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const [h5btn, setH5btn] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="home5">
      <div className="h5-left">
        <h1>Save big with our cheap Cloth rental!</h1>
        <h4>Top Airports. Local Suppliers. 24/7 Support.</h4>
      </div>

      <div className="h5-right">
        <button
          onMouseEnter={() => setH5btn(!h5btn)}
          onMouseLeave={() => setH5btn(!h5btn)}
          onClick={() => navigate("/services")}
        >
          Let's Try
          <FaCheckCircle
            style={{
              color: `${h5btn ? "red" : "white"}`,
              marginLeft: "4px",
              fontSize: "18px",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Offer;
