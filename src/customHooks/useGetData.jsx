import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const useGetData = () => {
  const [location, setLocation] = useState({});
  useEffect(() => {
    const ramdon = Math.floor(Math.random() * 126 + 1);
    axios
      .get(`https://rickandmortyapi.com/api/location/${ramdon}`)
      .then((res) => setLocation(res.data))
      .catch((error) => console.log(error));
  }, []);

  const inputId = (search) => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${search}`)
      .then((res) => setLocation(res.data))
      .catch((error) => console.log(error));
  };
  return { location, inputId };
};

export default useGetData;
