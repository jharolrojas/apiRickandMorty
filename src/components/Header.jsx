import React from "react";
import imgBackground from "../img/1.png";
import nameRickandMorty from "../img/Rick-and-Morty.png";

const Header = () => {
  return (
    <header>
      <img className="imgBackground" src={imgBackground} alt="" />
      <div  className="nameRickandMorty" >
        <img src={nameRickandMorty} alt="" />
        </div>
    </header>
  );
};

export default Header;
