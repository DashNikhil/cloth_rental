import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import "./Register.css";
import Offer from "../components/Offer";
import { useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { baseURL } from "../URL";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpass, setShowpass] = useState(false);

  let navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const ClickHandler = (e) => {
    if (name === "" || email === "" || password === "") {
      alert("Please fill all the fields!");
    } else {
      if (emailPattern.test(email)) {
        FinalHandler(e);
      } else {
        alert("Please enter a valid email!");
      }
    }
  };

  const FinalHandler = async (e) => {
    e.preventDefault();
    const user = await fetch(`${baseURL}/registration`, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await user.json();
    localStorage.setItem("myData", JSON.stringify(result.result));
    // console.log(result.result.role);
    navigate("/");
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="register">
        <h4>Register</h4>
        <p>create your Cloth Lease account</p>
        <h6>Full Name</h6>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <h6>Email Address</h6>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />
        <h6>Password</h6>
        <label className="register-label">
          <input
            type={showpass ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
          />
          <span
            onClick={() => setShowpass(!showpass)}
            style={{
              cursor: "pointer",
              marginLeft: "-35px",
              fontSize: "1.5rem",
            }}
          >
            {showpass ? <IoMdEye /> : <IoIosEyeOff />}
          </span>
        </label>
        <div style={{ display: "block", marginTop: "13px" }}>
          <label>
            <input type="checkbox" />I agree with the
          </label>
          <span
            style={{
              color: "red",
              fontSize: "bold",
              cursor: "pointer",
              marginLeft: "5px",
            }}
            onClick={() =>
              alert(
                "You are accepting all our terms and condition and we can not show these data because these are our hidden policies"
              )
            }
          >
            Terms Of Service
          </span>
        </div>
        <button onClick={ClickHandler}>
          Register{"  "}
          <FaLocationArrow style={{ color: "white", fontSize: "17px" }} />
        </button>
        <h5>
          Already have an account?{"  "}
          <span
            style={{ color: "red", opacity: "1", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </h5>
      </div>
      <Offer />
    </div>
  );
};

export default Register;
