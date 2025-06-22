import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [Name, setName] = useState(null);
  const [pos, setPos] = useState(false);
  let navigate = useNavigate();
  let loginStatus = localStorage.getItem("myData");
  let data = JSON.parse(loginStatus);

  useEffect(() => {
    if (loginStatus) {
      let result = JSON.parse(loginStatus);
      result = result.name;
      setName(result.split(" ")[0]);
      if (result.length > 14) {
        setName(result.substring(0, 14));
      }
    }
  }, [loginStatus, Name]);

  const Logout = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/register");
  };

  return (
    <div className="navbar">
      <h2>CLOTH_RENTAL</h2>
      <ul>
        <li>
          <Link to="/" className="lnk">
            HOME
          </Link>
        </li>
        <li>
          {loginStatus ? (
            data.role === "admin" ? (
              <Link to="/admin/addcars" className="lnk">
                Add_Cloth
              </Link>
            ) : (
              <Link to="/about" className="lnk">
                About_Us
              </Link>
            )
          ) : null}
        </li>
        <li>
          <Link to="/services" className="lnk">
            Services
          </Link>
        </li>

        <li>
          <Link to="/bookings" className="lnk">
            Bookings
          </Link>
        </li>
        <li>
          <Link to="/contact" className="lnk">
            Contact
          </Link>
        </li>
        <li>
          {loginStatus ? (
            <p onClick={() => Logout()} style={{ color: "orangered" }}>
              Logout
            </p>
          ) : (
            <Link to="/login" className="lnk">
              Login
            </Link>
          )}
        </li>

        {loginStatus ? (
          <button>{Name}</button>
        ) : (
          <button
            onMouseEnter={() => setPos(true)}
            onMouseLeave={() => setPos(false)}
            onClick={() => navigate("/register")}
          >
            Register
            <FaCheckCircle
              style={{
                color: `${pos ? "red" : "white"}`,
                fontSize: "17px",
                marginLeft: "4px",
                marginBottom: "-2px",
              }}
            />
          </button>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
