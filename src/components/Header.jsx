import React from "react";
import imgBackground from "../img/1.png";
import nameRickandMorty from "../img/Rick-and-Morty.png";

const Header = () => {
  return (
    <header className="header">
      <img
        className="imgBackground"
        src={imgBackground}
        alt="image the Rick and Morty"
      />
      <div className="nameRickandMorty">
        <img src={nameRickandMorty} alt="Rick and Morty" />
      </div>
    </header>
  );
};

export default Header;
