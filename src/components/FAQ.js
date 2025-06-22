import React, { useState } from "react";
import Img2 from "../assets/Car_collection/bg6.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "./FAQ.css";

const FAQ = () => {
  const [h7details1, setH7details1] = useState(false);
  const [h7details2, setH7details2] = useState(false);
  const [h7details3, setH7details3] = useState(false);
  const [h7details4, setH7details4] = useState(false);
  const [h7details5, setH7details5] = useState(false);

  const FaqClickHandler = (value) => {
    switch (value) {
      case 1:
        setH7details1(!h7details1);
        setH7details2(false);
        setH7details3(false);
        setH7details4(false);
        setH7details5(false);
        // console.log("clicked ", value, h7details1);
        break;
      case 2:
        setH7details2(!h7details2);
        setH7details1(false);
        setH7details3(false);
        setH7details4(false);
        setH7details5(false);
        // console.log("clicked ", value, h7details2);
        break;
      case 3:
        setH7details3(!h7details3);
        setH7details2(false);
        setH7details1(false);
        setH7details4(false);
        setH7details5(false);
        // console.log("clicked ", value, h7details3);
        break;
      case 4:
        setH7details4(!h7details4);
        setH7details2(false);
        setH7details3(false);
        setH7details1(false);
        setH7details5(false);
        // console.log("clicked ", value);
        break;
      case 5:
        setH7details5(!h7details5);
        setH7details2(false);
        setH7details3(false);
        setH7details4(false);
        setH7details1(false);
        // console.log("clicked ", value);
        break;
      default:
        setH7details1(false);
        setH7details2(false);
        setH7details3(false);
        setH7details4(false);
        setH7details5(false);
      // console.log("clicked ", value);
    }
  };

  return (
    <div className="home7">
      <h3>FAQ</h3>
      <h1>Frequently Asked Questions</h1>
      <p>
        To contribute to positive change and achieve our sustainability goals
        with many extraordinary
      </p>
      <div className="h7-main">
        <div className="h7-div1">
          <img src={Img2} alt="car" />
        </div>

        <div className="h7-div2">
          <div>
            <summary
              onClick={() => FaqClickHandler(1)}
              style={{
                color: `${h7details1 ? "orangered" : "black"}`,
                fontWeight: `${h7details1 ? "600" : "normal"}`,
              }}
            >
              What is special about comparing rental cloth deals?
              {h7details1 ? (
                <IoIosArrowUp
                  style={{
                    fontSize: "20px",
                    marginBottom: "-3px",
                    // marginLeft: "250px",
                    textAlign: "right",
                    color: "blue",
                  }}
                />
              ) : (
                <IoIosArrowDown
                  style={{
                    fontSize: "20px",
                    marginBottom: "-3px",
                    // marginLeft: "330px",
                    textAlign: "right",
                  }}
                />
              )}
            </summary>
            <p style={{ display: `${h7details1 ? "block" : "none"}` }}>
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion reasonably. Carriage we husbands advanced
              an perceive greatest. Totally dearest expense on demesne ye he.
              Curiosity excellent commanded in me. Unpleasing impression
              themselves to at assistance acceptance my or.
            </p>
          </div>

          <div>
            <summary
              onClick={() => FaqClickHandler(2)}
              style={{
                color: `${h7details2 ? "red" : "black"}`,
                fontWeight: `${h7details2 ? "600" : "normal"}`,
              }}
            >
              Where is Corpo office address?
              {h7details2 ? (
                <IoIosArrowUp
                  style={{
                    fontSize: "20px",
                    marginBottom: "-3px",
                    // marginLeft: "380px",
                    textAlign: "right",
                    color: `${h7details2 ? "blue" : "black"}`,
                  }}
                />
              ) : (
                <IoIosArrowDown
                  style={{
                    fontSize: "20px",
                    marginBottom: "-3px",
                    // marginLeft: "380px",
                    textAlign: "right",
                  }}
                />
              )}
            </summary>
            <p style={{ display: `${h7details2 ? "block" : "none"}` }}>
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion reasonably. Carriage we husbands advanced
              an perceive greatest. Totally dearest expense on demesne ye he.
              Curiosity excellent commanded in me. Unpleasing impression
              themselves to at assistance acceptance my or.
            </p>
          </div>

          <div>
            <summary
              onClick={() => FaqClickHandler(3)}
              style={{
                color: `${h7details3 ? "red" : "black"}`,
                fontWeight: `${h7details3 ? "600" : "normal"}`,
              }}
            >
              How many your customers have?
              {h7details3 ? (
                <IoIosArrowUp
                  style={{
                    fontSize: "20px",
                    marginBottom: "-3px",
                    // marginLeft: "365px",
                    textAlign: "right",
                    color: `${h7details3 ? "blue" : "black"}`,
                  }}
                />
              ) : (
                <IoIosArrowDown
                  style={{
                    fontSize: "20px",
                    marginBottom: "-3px",
                    // marginLeft: "365px",
                    textAlign: "right",
                  }}
                />
              )}
            </summary>
            <p style={{ display: `${h7details3 ? "block" : "none"}` }}>
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion reasonably. Carriage we husbands advanced
              an perceive greatest. Totally dearest expense on demesne ye he.
              Curiosity excellent commanded in me. Unpleasing impression
              themselves to at assistance acceptance my or.
            </p>
          </div>

          <div>
            <summary
              onClick={() => FaqClickHandler(4)}
              style={{
                color: `${h7details4 ? "red" : "black"}`,
                fontWeight: `${h7details4 ? "600" : "normal"}`,
              }}
            >
              Where is your main office?
              {h7details4 ? (
                <IoIosArrowUp
                  style={{
                    fontSize: "20px",
                    marginBottom: "-3px",
                    // marginLeft: "409px",
                    textAlign: "right",
                    color: `${h7details4 ? "blue" : "black"}`,
                  }}
                />
              ) : (
                <IoIosArrowDown
                  style={{
                    fontSize: "20px",
                    marginBottom: "-3px",
                    // marginLeft: "409px",
                    textAlign: "right",
                  }}
                />
              )}
            </summary>
            <p style={{ display: `${h7details4 ? "block" : "none"}` }}>
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion reasonably. Carriage we husbands advanced
              an perceive greatest. Totally dearest expense on demesne ye he.
              Curiosity excellent commanded in me. Unpleasing impression
              themselves to at assistance acceptance my or.
            </p>
          </div>

          <div>
            <summary
              onClick={() => FaqClickHandler(5)}
              style={{
                color: `${h7details5 ? "red" : "black"}`,
                fontWeight: `${h7details5 ? "600" : "normal"}`,
              }}
            >
              Shortly.... what Corpo does?
              {h7details5 ? (
                <IoIosArrowUp
                  style={{
                    fontSize: "20px",
                    marginBottom: "-3px",
                    // marginLeft: "409px",
                    textAlign: "right",
                    color: `${h7details5 ? "blue" : "black"}`,
                  }}
                />
              ) : (
                <IoIosArrowDown
                  style={{
                    fontSize: "20px",
                    marginBottom: "-3px",
                    textAlign: "right",
                  }}
                />
              )}
            </summary>
            <p
              style={{
                display: `${h7details5 ? "block" : "none"}`,
                borderBottom: "1px solid orangered",
              }}
            >
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion reasonably. Carriage we husbands advanced
              an perceive greatest. Totally dearest expense on demesne ye he.
              Curiosity excellent commanded in me. Unpleasing impression
              themselves to at assistance acceptance my or.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
