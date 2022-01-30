import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate, useParams, NavLink } from "react-router-dom";

const SingleCar = () => {
  //POUR LA NAVIGATION VERS UNE AUTRE PAGE
  const navigate = useNavigate();

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
      <h1>CARACTÉRISTIQUES DE VOTRE VOITURE</h1>
      <Container fluid>
        <Row>
          <Col sx={12} lg={7}>
            <Image fluid src={car.image} style={{ height: "429px" }} />
          </Col>
          <Col
            sx={12}
            lg={5}
            className="d-flex flex-column justify-content-center"
          >
            <p>
              Marque : <span>{car.marque}</span>
            </p>
            <p>
              Vitesse de croisière : <span>{car.vitesse} km/h</span>
            </p>
            <p>
              Carburant :{" "}
              <span>
                {car.carburant ? car.carburant : "Donnée non renseignée"}
              </span>
            </p>
            <p>
              Kilométrage :{" "}
              <span>
                {car.kilometrage
                  ? car.kilometrage + " km"
                  : "Donnée non renseignée"}
              </span>
            </p>
            <p>
              Nombre de porte :{" "}
              <span>
                {car.nbrPorte ? car.nbrPorte : "Donnée non renseignée"}
              </span>
            </p>
            <p>
              Boite de vitesse :{" "}
              <span>
                {car.boiteDeVitesse
                  ? car.boiteDeVitesse
                  : "Donnée non renseignée"}
              </span>
            </p>
            <p>
              Couleur :{" "}
              <span>{car.couleur ? car.couleur : "Donnée non renseignée"}</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center py-3">
            <Button onClick={() => navigate("/")} variant="primary">
              <i class="fas fa-long-arrow-alt-left"></i>
            </Button>
            <NavLink to={`/modify-car/${params.id}`}>
              <Button variant="primary">
                <i class="far fa-edit"></i>
              </Button>
              `
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleCar;
