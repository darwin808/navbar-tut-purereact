import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const ref1 = useRef();
  const [click, setclick] = useState(false);
  const [window, setwindow] = useState(false);
  const handleclikc = () => {
    setclick(!click);
    console.log(ref1.current.clientWidth);
    setwindow(ref1.current.clientWidth);
  };
  return (
    <>
      <nav ref={ref1} className="navbar">
        <div className="navheader">
          <h1>EPIC</h1>
          <i
            onClick={handleclikc}
            className={click ? "fas fa-times" : "fas fa-bars"}
          />
        </div>
        {window < 600 ? (
          <ul className="navlinks2" style={{ display: "flex" }}>
            <li className="nav-item">Home</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Products</li>
            <li className="nav-item">Contact Us</li>
            <li className="nav-item">
              {" "}
              <button>Sign Up</button>
            </li>
          </ul>
        ) : (
          <ul className="navlinks" style={{ display: "flex" }}>
            <li className="nav-item">Home</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Products</li>
            <li className="nav-item">Contact Us</li>
            <li className="nav-item">
              {" "}
              <button>Sign Up</button>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar;
