import React from "react";
import Img1 from "../assets/Car_collection/cloth10.webp";
import Img2 from "../assets/Car_collection/tm1.jpg";
import Img3 from "../assets/Car_collection/tm2.jpg";
import "./Team.css";

const Team = () => {
  return (
    <div className="team">
      <h5>Our Team</h5>
      <h2>Best Tem Members</h2>
      <p>
        To contribute to positive change and achieve our sustainability goals
        with many extraordinary
      </p>

      <div className="team-main">
        <div className="team-sub-main">
          <div>
            <img src={Img1} alt="car1" />
          </div>
          <h6>Nikhil Kushwaha</h6>
          <h5>Developer</h5>
        </div>

        <div className="team-sub-main">
          <div>
            <img src={Img2} alt="car2" />
          </div>
          <h6>Dash Singh</h6>
          <h5>Designer</h5>
        </div>

        <div className="team-sub-main">
          <div>
            <img src={Img3} alt="car3" />
          </div>
          <h6>Nikhileshwar Dash</h6>
          <h5>Intern</h5>
        </div>
      </div>
    </div>
  );
};

export default Team;
