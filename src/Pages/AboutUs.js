import React from "react";
import Img from "../assets/Car_collection/bg11.jpg";
import { FaCheckCircle } from "react-icons/fa";
import "./AboutUs.css";
import Work from "../components/Work";
import Offer from "../components/Offer";
import Team from "../components/Team";

const AboutUs = () => {
  return (
    <>
      <div className="about">
        <div className="about-img">
          <img src={Img} alt="car" />
        </div>

        <div className="about-txt">
          <h3>ABOUT US</h3>
          <h2>Moving With Moverx Is Always Easy And Fast</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>

          <h6>
            <FaCheckCircle
              style={{
                color: "red",
                fontSize: "20px",
                marginRight: "4px",
                marginBottom: "-3px",
              }}
            />
            Take a look at our round up of the best shows
          </h6>

          <h6>
            <FaCheckCircle
              style={{
                color: "red",
                fontSize: "20px",
                marginRight: "4px",
                marginBottom: "-3px",
              }}
            />{" "}
            It has survived not only five centuries
          </h6>

          <h6>
            <FaCheckCircle
              style={{
                color: "red",
                fontSize: "20px",
                marginRight: "4px",
                marginBottom: "-3px",
              }}
            />
            Lorem Ipsum has been the ndustry standard dummy text
          </h6>
          <button>
            Discover More
            <FaCheckCircle
              style={{
                color: "white",
                fontSize: "15px",
                marginLeft: "5px",
                marginBottom: "-2px",
              }}
            />
          </button>
        </div>
      </div>
      <Work />
      <Team />
      <Offer />
    </>
  );
};

export default AboutUs;
