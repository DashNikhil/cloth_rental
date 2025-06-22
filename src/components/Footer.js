import React, { useState } from "react";
import "./Footer.css";
import { FaCheckCircle } from "react-icons/fa";
// import { FaCarAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdOutlineCopyright } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { baseURL } from "../URL";

const Footer = () => {
  const [email, setEmail] = useState("");
  const ClickHandler = (e) => {
    if (email !== "") FinalHandler(e);
  };
  const FinalHandler = async (e) => {
    const user = await fetch(`${baseURL}/subscriber`, {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await user.json();
    alert(
      `Our team will send you the notication on ${result.result.email}, if it is found true.`
    );
    // console.log(result.result.email);
    setEmail("");
  };
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-sub1">
          <h1>
            <BsCartCheckFill
              style={{
                color: "red",
                fontSize: "30px",
                marginRight: "6px",
                marginBottom: "-4px",
              }}
            />
            Cloth Lease
          </h1>
          <p>
            Use securing confined his shutters. Delightful as he it acceptance
            an solicitude discretion.
          </p>
          <h6>
            <FaMapLocationDot
              style={{
                color: "red",
                fontSize: "22px",
                marginRight: "6px",
                marginBottom: "-2px",
              }}
            />
            36 Nora Dreek, Old East 2360, India
          </h6>
          <h5>
            <IoCall
              style={{
                color: "red",
                fontSize: "22px",
                marginRight: "6px",
                marginBottom: "-2px",
              }}
            />
            (123) 456-7890
          </h5>
          <h5>
            <MdEmail
              style={{
                color: "red",
                fontSize: "22px",
                marginRight: "6px",
                marginBottom: "-4px",
              }}
            />
            info@gmail.com
          </h5>
        </div>

        <div className="footer-sub2">
          <h1>COMPANY</h1>
          <p>New York</p>
          <p>Careers</p>
          <p>Mobile</p>
          <p>Blog</p>
          <p>About Us</p>
          <p>How we work</p>
        </div>

        <div className="footer-sub3">
          <h1>WORK HOURS</h1>
          <p>
            Mon - Fri: <span>09:00AM - 09:00PM</span>
          </p>
          <p>
            Sat: <span>09:00AM - 06:00PM</span>
          </p>
          <p>
            Sun: <span>Closed</span>
          </p>
        </div>

        <div className="footer-sub4">
          <h1>SUBSCRIPTION</h1>
          <p>Subscribe your Email address for latest news & updates.</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
          />
          <br></br>
          <button onClick={ClickHandler}>
            Submit{" "}
            <FaCheckCircle
              style={{
                color: "white",
                fontSize: "20px",
                marginLeft: "4px",
                marginBottom: "-3px",
              }}
            />
          </button>
        </div>
      </div>

      <div className="footer-main2">
        <p>
          <MdOutlineCopyright
            style={{
              color: "black",
              fontSize: "27px",
              marginRight: "6px",
              marginBottom: "-5px",
            }}
          />
          2023 Book Your Ride. All Rights Reserved | Design by{" "}
          <span>NIKHIL KUSHWAHA</span>
        </p>
        {/* <div>Links</div> */}
      </div>
    </footer>
  );
};

export default Footer;
