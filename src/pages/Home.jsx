import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import axios from "axios";

const Home = () => {
//STOCKAGE DE LA DONNÉE
const [cars, setCars]=useState([]);

//RECUPERATION DE LA DONNÉE VIA AXIOS
useEffect(()=>{
  axios
  .get("http://localhost:8000/voiture/afficher_toutes_les_voitures")
  .then(res=>setCars(res.data))
},[]);

  return (
    <div className="home_container">
      <h1>PARC AUTOMOBILE - KLH</h1>
      <Header />
      {cars && cars.map((car)=>(
        <Card/>
      ))}
    </div>
  );
};

export default Home;
