import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import FormCar from "../components/FormCar";
import Header from "../components/Header";

const AddCar = () => {
  //
  const navigate = useNavigate();
  //FONCTION POUR LA CREATION D'UNE VOITURE
  const handleSubmit = (e, voiture) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/voiture/creer", JSON.stringify(voiture))
      .then((res) => console.log(res))
      .then(() => navigate("/"));
  };

  return (
    <div className="addcar_container">
      <Header />
      <h1>AJOUTER UNE VOITURE - KLH</h1>
      <FormCar handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddCar;
