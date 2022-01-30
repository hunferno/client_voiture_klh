import React from "react";
import { useParams } from "react-router-dom";
import FormCarUpdate from "../components/FormCarUpdate";
import Header from "../components/Header";

const ModifyCar = () => {
  //RECUPERATION DU PARAMETRE D'URL
  const params = useParams();

  return (
    <div className="modif_container">
      <Header />
      <h1>MODIFIER VOTRE VOITURE - KLH</h1>
      <FormCarUpdate id={params.id} />
    </div>
  );
};

export default ModifyCar;
