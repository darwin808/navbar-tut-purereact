import React, { useEffect, useState } from "react";
import "./Navbar2.css";

function useWindow() {
  const [size, setsize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleresize = () => {
      setsize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleresize);
  }, []);
  return size;
}

function Navbar2() {
  const [burger, setburger] = React.useState(false);
  const ref1 = React.useRef();
  const [mobilemenu, setmobilemenu] = React.useState("none");

  const handleburger = () => {
    setburger(!burger);
    setmobilemenu("flex");
    console.log(window.innerWidth);
  };
  const [width, height] = useWindow();
  return (
    <>
      <div className="navbar">
        <div className="header">
          <h1>EPIC</h1>
          {width}

          <i
            ref={ref1}
            onClick={handleburger}
            className={burger ? "fas fa-times" : "fas fa-bars"}
          />
        </div>

        {width > 600 ? (
          <ul className="navlinks2">
            <li className="navitem2">Home</li>
            <li className="navitem2">Services</li>
            <li className="navitem2">Product</li>
            <li className="navitem2">Contact Us</li>
            <li className="navitem2">
              <button>Sign Up</button>
            </li>
          </ul>
        ) : (
          <ul
            className="navlinks"
            style={{ display: `${burger ? "flex" : "none"}` }}>
            <li className="navitem">Home</li>
            <li className="navitem">Services</li>
            <li className="navitem">Products</li>
            <li className="navitem">Contact US</li>
            <li className="navitem">
              <button>Sign Up</button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar2;
