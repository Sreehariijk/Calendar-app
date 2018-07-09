import React from 'react';
import image1 from "../images/logo.jpg";
import image2 from "../images/logo_1.png";
import '../css/logo.css';
const Logo = ({ image }) => {
if(image=="AUGUST 2018")
  {
  return (
    
   <div id="logo">
    <img src={image2} alt="Logo" className="logo"></img>
    </div>
  );
 }
 else if(image=="SEPTEMBER 2018")
  {
  return (
    
   <div id="logo">
    <img src={image1} alt="Logo" className="logo"></img>
    </div>
  );
 }
}


export default Logo;