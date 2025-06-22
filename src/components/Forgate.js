import { useState } from "react";
import "./Forgate.css";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { baseURL } from "../URL";

function Forgate(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfassword] = useState("");
  const [showpass, setShowpass] = useState(false);
  const [showcnfpass, setShowcnfpass] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const ForgatePass = async () => {
    let result = await fetch(`${baseURL}/login`, {
      method: "PATCH",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.message) {
      alert(result.message);
    } else {
      alert(result.result);
    }
  };

  function handleLogin(e) {
    e.preventDefault();
    // console.log(email, password, cnfpassword);
    if (email === "" || password === "" || cnfpassword === "") {
      alert("Please fill all the fields!");
    } else if (password === cnfpassword) {
      if (emailPattern.test(email)) {
        ForgatePass();
        props.toggle();
      } else {
        alert("Please enter a valid email!");
      }
    } else {
      alert("Confirm Password does not match!");
    }
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Forgate Password</h2>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            New Password:
            <input
              type={showpass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <label>
            Confirm Password:
            <input
              type={showcnfpass ? "text" : "password"}
              value={cnfpassword}
              onChange={(e) => setCnfassword(e.target.value)}
            />
            <span
              onClick={() => setShowcnfpass(!showcnfpass)}
              style={{
                cursor: "pointer",
                marginLeft: "-35px",
                fontSize: "1.5rem",
              }}
            >
              {showcnfpass ? <IoMdEye /> : <IoIosEyeOff />}
            </span>
          </label>
          <button type="submit">Forgate</button>
        </form>
        <button className="popup-btn " onClick={props.toggle}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Forgate;
