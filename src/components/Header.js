import { IMG_URL } from "../utils/constants";
import { useState } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
