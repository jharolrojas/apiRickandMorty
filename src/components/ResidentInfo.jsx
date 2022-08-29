import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const ResidentInfo = ({ url }) => {
  console.log(url,"hola")
  const [caracter, setCaracter] = useState({});
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setCaracter(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="containerCardC">
    <article className="containerCard">
      
      <h4 className="h4">{caracter.name}</h4>
      <div className="containerImg">
      <div className="statusCaracter">
        <div
          className="circleStatus"
          style={{
            backgroundColor:
              caracter.status === "Dead"
                ? "red"
                : caracter.status === "unknown"
                ? "yellow"
                : "green",
          }}
        ></div>
        {caracter.status}
      </div>
        <img
          style={{
            boxShadow:
              caracter.status === "Dead"
                ? " 5px 5px 10px red"
                : caracter.status === "unknown"
                ? " 5px 5px 10px yellow"
                : " 5px 5px 10px green",
          }}
          src={caracter.image}
          alt=""
        />
      </div>
      <div className="containerDescriptionPerson">
        <div className="containerDescriptionSpecific">
          <div className="DescriptionSpecific">
            <b>Status:</b>
            <b>{caracter.status}</b>
          </div>
          <div className="DescriptionSpecific">
            <b>Origin:</b> <b>{caracter.origin?.name}</b>
          </div>
          <div className="DescriptionSpecific">
            <b>Episode:</b>
            <b>{caracter.episode?.length}</b>
          </div>
        </div>
      </div>
    </article>
    </div>
  );
};

export default ResidentInfo;
