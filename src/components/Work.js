import React from "react";
import Img1 from "../assets/Car_collection/cloth3.jpg";
import Img2 from "../assets/Car_collection/cloth5.jpg";
import Img3 from "../assets/Car_collection/work3.jpg";
import Img4 from "../assets/Car_collection/work4.jpg";
import "./Work.css";

const Work = () => {
  return (
    <div className="work">
      <h5>Our Work</h5>
      <h2>Why Choose Us</h2>
      <p>
        To contribute to positive change and achieve our sustainability goals
        with many extraordinary
      </p>

      <div className="work-main">
        <div className="work-sub-main">
          <div>
            <img src={Img1} alt="car1" />
            <p>1</p>
          </div>
          <h6>Choose a Service</h6>
          <p>Aute irure dolor reprehenderit velit esse cillum dolore fugiat</p>
        </div>

        <div className="work-sub-main">
          <div>
            <img src={Img2} alt="car2" />
            <p>2</p>
          </div>
          <h6>Request a Rent</h6>
          <p>Aute irure dolor reprehenderit velit esse cillum dolore fugiat</p>
        </div>

        <div className="work-sub-main">
          <div>
            <img src={Img3} alt="car3" />
            <p>3</p>
          </div>
          <h6>Receive Custom Plan</h6>
          <p>Aute irure dolor reprehenderit velit esse cillum dolore fugiat</p>
        </div>

        <div className="work-sub-main">
          <div>
            <img src={Img4} alt="car4" />
            <p>4</p>
          </div>
          <h6>Let’s Make it Happen</h6>
          <p>Aute irure dolor reprehenderit velit esse cillum dolore fugiat</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
