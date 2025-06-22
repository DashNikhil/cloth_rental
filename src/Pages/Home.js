import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Img1 from "../assets/Car_collection/cloth3.jpg";
import Img2 from "../assets/Car_collection/bg1.jpg";
import Img3 from "../assets/Car_collection/bg2.jpg";
import Img4 from "../assets/Car_collection/bg3.jpg";
import Img5 from "../assets/Car_collection/bg4.jpg";
import Img6 from "../assets/Car_collection/bg5.jpg";
import Img7 from "../assets/Car_collection/bg6.jpg";
import Img8 from "../assets/Car_collection/bg7.jpg";
import Img9 from "../assets/Car_collection/bg8.jpg";
import Img10 from "../assets/Car_collection/bg9.jpg";
// import { FaCar } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
// import { FaCarAlt } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import "./Home.css";
import Car from "../components/Car";
import VehicleModels from "../components/VehicleModels";
import Offer from "../components/Offer";
import FindDeals from "../components/FindDeals";
import FAQ from "../components/FAQ";
import HomeBlog from "../components/HomeBlog";
import Distance from "../components/Distance";
const Home = () => {
  const [ishover1, setIshover1] = useState(false);
  const [ishover2, setIshover2] = useState(false);
  const [ishover3, setIshover3] = useState(false);

  return (
    <div>
      <Slide style={{ width: "100%" }}>
        <Car Img={Img1} index={1} />
        <Car Img={Img2} index={2} />
        <Car Img={Img3} index={3} flag={true} />
        <Car Img={Img4} index={4} />
        <Car Img={Img5} index={5} flag={true} />
        <Car Img={Img6} index={6} flag={true} />
        <Car Img={Img7} index={7} />
        <Car Img={Img8} index={8} />
        <Car Img={Img9} index={9} />
        <Car Img={Img10} index={10} />
      </Slide>

      <Distance />

      <div className="home3">
        <h3 style={{ color: "rgb(227, 89, 58)", fontSize: "1.5rem" }}>
          Rent your Cloth now
        </h3>
        <h1>Quick & easy Cloth rental</h1>
        <div className="h3-div-main">
          <div>
            <GiClothes
              style={{
                color: `${ishover1 ? "white" : "red"}`,
                fontSize: "125px",
                width: "41%",
                marginLeft: "30px",
                cursor: "pointer",
                backgroundColor: `${ishover1 ? "red" : "#FBDBED"}`,
                borderRadius: "50%",
                padding: "20px",
              }}
              onMouseEnter={() => setIshover1(!ishover1)}
              onMouseLeave={() => setIshover1(!ishover1)}
            />
            <h2>Choose Cloths</h2>
            <p>
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </p>
          </div>

          <div>
            <IoIosContacts
              style={{
                color: `${ishover2 ? "white" : "red"}`,
                fontSize: "125px",
                width: "41%",
                marginLeft: "30px",
                cursor: "pointer",
                backgroundColor: `${ishover2 ? "red" : "#FBDBED"}`,
                borderRadius: "50%",
                padding: "20px",
              }}
              onMouseEnter={() => setIshover2(!ishover2)}
              onMouseLeave={() => setIshover2(!ishover2)}
            />
            <h2>Contact Operator</h2>
            <p>
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </p>
          </div>

          <div>
            <GiClothes
              style={{
                color: `${ishover3 ? "white" : "red"}`,
                fontSize: "125px",
                width: "41%",
                marginLeft: "30px",
                cursor: "pointer",
                backgroundColor: `${ishover3 ? "red" : "#FBDBED"}`,
                borderRadius: "50%",
                padding: "20px",
              }}
              onMouseEnter={() => setIshover3(!ishover3)}
              onMouseLeave={() => setIshover3(!ishover3)}
            />
            <h2>Let's Try</h2>
            <p>
              To contribute to positive change and achieve our sustainability
              goals with many extraordinary
            </p>
          </div>
        </div>
      </div>

      <VehicleModels />
      <Offer />
      <FindDeals />
      <FAQ />
      <HomeBlog />
    </div>
  );
};

export default Home;
