import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import FormSpeedTest from "../components/FormSpeedTest";
import Header from "../components/Header";

const SpeedTest = () => {
  //DONNÉE DE VITESSE
  const [distance, setDistance] = useState(0);
  //STOCKAGE DES VOITURES
  const [cars, setCars] = useState([]);
  const [result, setResult] = useState(0);
  //GEGSTION DE L'ALERTE
  const [alert, setAlert] = useState(false);

  //RECUPERATION DE LA DONNÉE VIA AXIOS
  useEffect(() => {
    axios
      .get("http://localhost:8000/voiture/afficher_toutes_les_voitures")
      .then((res) => setCars(res.data));
  }, []);

  //FONCTION POUR CALCUL
  const handleSubmit = (e, id) => {
    e.preventDefault();
    //ENVOI DES DONNÉES SI ID != 0
    if (id !== 0) {
      axios
        .post(
          `http://localhost:8000/voiture/calcul_du_temps`,
          JSON.stringify({
            id,
            distance: Number(distance),
          })
        )
        .then((res) => {
          setResult(Math.ceil(res.data));
          setAlert(false);
        });
    } else {
      setAlert(true);
    }
  };

  return (
    <div className="speedtest_container">
      <h1>SIMULATEUR DE VITESSE - KLH</h1>
      <Header />
      {alert && (
        <Alert
          variant="warning"
          className="d-flex justify-content-center align-items-center"
          style={{ fontSize: "30px" }}
        >
          Vous devez IMPÉRATIVEMENT selectionner une voiture !
        </Alert>
      )}
      <FormSpeedTest
        cars={cars}
        handleSubmit={handleSubmit}
        setDistance={setDistance}
      />

      {result && (
        <div className="resultat">
          <p>
            Vous mettrez{" "}
            <span>
              {Math.floor(result / 60)}H : {result % 60}MN
            </span>{" "}
            pour parcourir {distance} km
          </p>
        </div>
      )}
    </div>
  );
};

export default SpeedTest;
