import React from 'react';
import image2 from "../images/logo.jpg";
import image1 from "../images/logo_1.png";
import '../css/logo.css';
const style={height:"180px"}
const Logo = ({ monthNumber }) => {
if(monthNumber==8)
  {
      return (
      
        <div id="logo">
        <img src={image1} alt="Logo" className="logo" style={style}></img>
        </div>
    );
}
if(monthNumber==9)
  {
  return (
        <div id="logo">
        <img src={image2} alt="Logo" className="logo"  style={style}></img>
        </div>
  );
 }
}


export default Logo;