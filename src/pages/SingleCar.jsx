import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const SingleCar = () => {
  //RECUPERATION DU PARAMETRE D'URL
  const params = useParams();

  //CREATION DE STATE CAR
  const [car, setCar] = useState({});

  //RECUPERATION DE LA DATA
  useEffect(() => {
    axios
      .get(`http://localhost:8000/voiture/afficher_la_voiture/${params.id}`)
      .then((res) => setCar(res.data));
  }, []);

  return (
    <div className="car_container">
      <h1>CARACTÉRISTIQUES DE VOTRE {car.marque.toUpperCase()} </h1>
      <Header />
    </div>
  );
};

export default SingleCar;
