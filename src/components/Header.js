import React, { useState } from "react";
import { IMG_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  // let btnName = "login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  console.log("Header render");
  return (
    <div className="flex justify-between bg-red-50 shadow-md">
      <div className="logo-container">
        <img className="w-40" src={IMG_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4 ">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            {/* <a href="/about">About Us</a> */}
            {/* never use anchor tag as it refreshes the whole page  */}
            <Link to="/about">About US</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Conatact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
