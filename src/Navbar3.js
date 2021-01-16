import React, { useState, useEffect } from "react";
import "./Navbar3.css";

function useWindow() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
}

export default function Navbar3() {
  const [burger, setburger] = useState(false);
  const handleburger = () => {
    setburger(!burger);
  };
  const [height, width] = useWindow();

  return (
    <>
      <div className="navbar">
        <div className="header">
          <h1 className="title">EPIC</h1>
        </div>

        <i
          className={burger ? "fas fa-times" : "fas fa-bars"}
          onClick={handleburger}
        />

        {width > 600 ? (
          <ul className="navlinks2">
            <li className="navitems2">Home</li>
            <li className="navitems2">Products</li>
            <li className="navitems2">Services</li>
            <li className="navitems2">Contact Us</li>
            <li className="navitems2">
              <button>Sign Up</button>
            </li>
          </ul>
        ) : (
          <ul
            className="navlinks"
            style={{ display: `${burger ? "flex" : "none"}` }}>
            <li className="navitems">Home</li>
            <li className="navitems">Products</li>
            <li className="navitems">Services</li>
            <li className="navitems">Contact Us</li>
            <li className="navitems">
              <button>Sign Up</button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
