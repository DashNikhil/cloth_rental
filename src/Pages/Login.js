import React, { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import Offer from "../components/Offer";
import { useNavigate } from "react-router-dom";
import Forgate from "../components/Forgate";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { baseURL } from "../URL";

const Login = () => {
  const [seen, setSeen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpass, setShowpass] = useState(false);
  let navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const ClickHandler = (e) => {
    if (email === "" || password === "") {
      alert("Please fill all the fields!");
    } else {
      if (emailPattern.test(email)) {
        FinalHandler(e);
      } else {
        alert("Please enter a valid email!");
      }
    }
  };

  function togglePop() {
    setSeen(!seen);
  }

  const FinalHandler = async (e) => {
    // e.preventDefault();
    const user = await fetch(`${baseURL}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await user.json();
    localStorage.setItem("myData", JSON.stringify(result.result));
    // console.log(result.result.role);
    navigate("/");
    window.location.reload();
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="register">
        <h4>Login</h4>
        <p>login with your Cloth Lease account</p>
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
            <input type="checkbox" />
            Remember me
          </label>
          <span
            style={{
              color: "red",
              fontSize: "bold",
              cursor: "pointer",
              marginLeft: "18%",
            }}
            onClick={() =>
              // alert("Password change component has not been added till now")
              togglePop()
            }
          >
            Forgot Password?
          </span>
        </div>
        <button onClick={ClickHandler}>
          Login
          <IoLogIn
            style={{ color: "white", fontSize: "25px", marginBottom: "-6px" }}
          />
        </button>
        <h5>
          Don't have an account?{"  "}
          <span
            style={{ color: "red", opacity: "1", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </h5>
      </div>
      {seen ? <Forgate toggle={togglePop} /> : null}
      <Offer />
    </div>
  );
};

export default Login;
