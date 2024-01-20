import { IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // let btnName = "login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={IMG_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="/about">About Us</a> */}
            {/* never use anchor tag as it refreshes the whole page  */}
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Conatact Us</Link>
          </li>
          <li>Cart</li>
          <button
            // }}
            className="login"
            // onClick={() => {
            //   btnName = "logout";
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
