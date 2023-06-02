import React from "react";
import logo from "../Images/Airbnb-logo.png"

export default function Navbar(){
  return(
    <nav>
      <img src={logo} alt="logo" className="nav--logo"/>
    </nav>
  )
}