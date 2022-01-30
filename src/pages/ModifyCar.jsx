import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormCarUpdate from "../components/FormCarUpdate";
import Header from "../components/Header";

const ModifyCar = () => {
  //RECUPERATION DU PARAMETRE D'URL
  const params = useParams();
  const navigate = useNavigate();

  //CREATION DE LA VOITURE A MODIFIER
  const [carToUpdate, setCarToUpdate] = useState({});

  //RECUPERATION DE LA DATA
  useEffect(() => {
    axios
      .get(`http://localhost:8000/voiture/afficher_la_voiture/${params.id}`)
      .then((res) => setCarToUpdate(res.data));
  }, []);

  //FONCTION POUR LA CREATION D'UNE VOITURE
  const handleSubmit = (e, voiture) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8000/voiture/modifier_la_voiture/${params.id}`,
        JSON.stringify(voiture)
      )
      .then((res) => console.log(res))
      .then(() => navigate("/"));
  };

  return (
    <div className="modif_container">
      <Header />
      <h1>MODIFIER VOTRE VOITURE - KLH</h1>
      <FormCarUpdate car={carToUpdate} handleSubmit={handleSubmit} />
    </div>
  );
};

export default ModifyCar;
