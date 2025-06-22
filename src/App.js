import "./App.css";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import Services from "./Pages/Services";
import AddCars from "./Pages/AddCars";
import Contact from "./Pages/Contact";
import NavBar from "./components/NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register.js";
import Login from "./Pages/Login.js";
import Private from "./components/Private.js";
import Bookings from "./Pages/Bookings.js";
import History from "./components/History.js";
import Branding from "./components/Branding.js";
import Interior from "./components/Interior.js";
import Detail from "./components/Detail.js";

function App() {
  const auth = localStorage.getItem("myData");
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Private />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/history" element={<History />} />
          <Route path="/branding" element={<Branding />} />
          <Route
            path="/admin/addcars"
            element={
              auth && JSON.parse(auth).role === "admin" ? (
                <AddCars />
              ) : (
                <Login />
              )
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
        {auth ? (
          <Route
            path="*"
            element={
              <h1
                style={{
                  height: "70vh",
                  backgroundColor: "gray",
                  color: "red",
                  fontSize: "4rem",
                  textAlign: "center",
                }}
              >
                You Can not access this page
              </h1>
            }
          />
        ) : (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />{" "}
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
