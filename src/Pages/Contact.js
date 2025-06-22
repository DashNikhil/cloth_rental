import React, { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import "./Contact.css";
import Offer from "../components/Offer";
import { baseURL } from "../URL";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const ClickHandler = () => {
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      FinalSubmit();
    } else if (name === "") {
      alert("Please fill your Name");
    } else if (email === "") {
      alert(
        "Please fill your email,that will help our team to connect with you"
      );
    } else if (subject === "") {
      alert("Please write your subject");
    } else {
      alert("Please write your message");
    }
  };

  const FinalSubmit = async () => {
    let user = await fetch(`${baseURL}/contact`, {
      method: "POST",
      body: JSON.stringify({ name, email, subject, website, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await user.json();
    console.log(result.result);
    alert("Our team will connect you soon!");
    setName("");
    setEmail("");
    setSubject("");
    setWebsite("");
    setMessage("");
  };
  return (
    <>
      <div className="contact">
        <div>
          <FaMapLocationDot
            style={{
              color: "white",
              fontSize: "30px",
              padding: "15px 15px",
              backgroundColor: "orangered",
              borderRadius: "50%",
            }}
          />
          <div>
            <h6>Our Address</h6>
            <p>Sector 40 Noida</p>
          </div>
        </div>

        <div>
          <IoCall
            style={{
              color: "white",
              fontSize: "30px",
              padding: "15px 15px",
              backgroundColor: "orangered",
              borderRadius: "50%",
            }}
          />
          <div>
            <h6>Phone Number</h6>
            <p>+91 8888888888</p>
          </div>
        </div>

        <div>
          <MdEmail
            style={{
              color: "white",
              fontSize: "30px",
              padding: "15px 15px",
              backgroundColor: "orangered",
              borderRadius: "50%",
            }}
          />
          <div>
            <h6>Email Us</h6>
            <p>info@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="contact2">
        <div className="contact-txt">
          <h5>Get in Touch</h5>
          <h1>Have Any Questions?</h1>
          <p>
            Distinctively exploit revolutionary catalysts for chang the
            Seamlessly optimal rather than just in web & apps development
            optimal alignments for intuitive.
          </p>
          <div>
            <FaFacebookSquare className="contact-icons col" />
            <FaSquareXTwitter className="contact-icons " />
            <FaLinkedin className="contact-icons col3" />
          </div>
        </div>

        <div className="contact-form">
          <div>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>

            <div>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
              />
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Website"
              />
            </div>
          </div>

          <textarea
            placeholder="Message"
            rows="6"
            cols="63"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="contact-btn">
        <button onClick={ClickHandler}>
          Submit Now
          <FaCheckCircle
            style={{
              color: "white",
              fontSize: "20px",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
          />
        </button>
      </div>

      <div
        style={{
          width: "100%",
          height: "65vh",
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.2478577720744!2d80.93562247521449!3d26.640545476810484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf1042871748f%3A0xde0c16769f0166f4!2sAmbalika%20Institute%20Of%20Management%20And%20Technology%20Campus%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1702715942689!5m2!1sen!2sin"
          title="map"
          style={{
            border: "0",
            height: "100%",
            margin: "2px auto",
            width: "85%",
            textAlign: "center",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </div>
      <Offer />
    </>
  );
};

export default Contact;
