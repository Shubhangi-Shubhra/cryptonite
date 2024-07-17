import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";
import Switcher from "./Switcher";

const Logo = () => {
  return (
    <div>
<Link
      to="/"
      className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-cyan flex items-center
     "
    >
      <img src={logoSvg} alt="CryptoBucks" />
      <span>Cryptonite</span>
    </Link>
    <div className="absolute top-[1.5rem] right-[1.5rem]">
        <Switcher /> {/* Place Switcher component here */}
      </div>
    </div>
    
    
  );
};

export default Logo;
