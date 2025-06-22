import React, { useEffect, useState } from "react";
import Img1 from "../assets/Car_collection/bg1.jpg";
import Img2 from "../assets/Car_collection/bg2.jpg";
import Img3 from "../assets/Car_collection/bg3.jpg";
import Img4 from "../assets/Car_collection/bg4.jpg";
import Img5 from "../assets/Car_collection/bg5.jpg";
import Img6 from "../assets/Car_collection/bg6.jpg";
import Img7 from "../assets/Car_collection/bg7.jpg";
import Img8 from "../assets/Car_collection/bg8.jpg";
import Img9 from "../assets/Car_collection/bg9.jpg";
import "./Services.css";
import Offer from "../components/Offer";
import SubServices from "./SubServices";
import { baseURL } from "../URL";

const Services = () => {
  // const getData = async () => {
  //   const data = await fetch(`${baseURL}/addCars`);
  //   const result = await data.json();
  //   console.log(JSON.stringify(result.result));
  // };
  const [serviceList, setServicelist] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/addCars`)
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        return result.result;
      })
      .then((result) => {
        // console.log(result);
        setServicelist(result);
      });
  }, []);

  return (
    <>
      <div className="services">
        <SubServices
          Img={Img1}
          price={75}
          name={"Cloth 1"}
          ClothId={"CRTL0035481D"}
        />
        <SubServices
          Img={Img2}
          price={79}
          name={"Cloth 2"}
          ClothId={"CRTL0035482A"}
        />
        <SubServices
          Img={Img3}
          price={81}
          name={"Cloth 3"}
          ClothId={"CRTL0035483S"}
        />
        <SubServices
          Img={Img4}
          price={85}
          name={"Cloth 4"}
          ClothId={"CRTL0035484H"}
        />
        <SubServices
          Img={Img5}
          price={88}
          name={"Cloth 5"}
          ClothId={"CRTL0035485N"}
        />
        <SubServices
          Img={Img6}
          price={92}
          name={"Cloth 6"}
          ClothId={"CRTL0035486I"}
        />
        <SubServices
          Img={Img7}
          price={95}
          name={"Cloth 7"}
          ClothId={"CRTL0035487K"}
        />
        <SubServices
          Img={Img8}
          price={97}
          name={"Cloth 8"}
          ClothId={"CRTL0035488H"}
        />
        <SubServices
          Img={Img9}
          price={99}
          name={"Cloth 9"}
          ClothId={"CRTL0035489I"}
        />
        {serviceList.map((photo) => (
          <SubServices
            key={photo._id} //for making a unique key to avoid errors
            Img={photo.imgUrl}
            name={photo.carname}
            price={photo.carprice}
            ClothId={photo._id}
          />
        ))}
      </div>
      <Offer />
    </>
  );
};

export default Services;
