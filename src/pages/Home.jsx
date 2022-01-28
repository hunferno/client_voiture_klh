import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import CardCar from "../components/CardCar";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  //STOCKAGE DE LA DONNÉE
  const [cars, setCars] = useState([]);

  //RECUPERATION DE LA DONNÉE VIA AXIOS
  useEffect(() => {
    axios
      .get("http://localhost:8000/voiture/afficher_toutes_les_voitures")
      .then((res) => setCars(res.data));
  }, []);

  return (
    <div className="home_container">
      <h1>PARC AUTOMOBILE - KLH</h1>
      <Header />
      {!cars && (
        <span>CONNECTION A LA BASE DE DONNÉE ECHOUÉE OU PARC VIDE !</span>
      )}

      <Container>
        <Row>
          {cars &&
            cars.map((car) => (
              <Col key={car.id} sm={4}>
                <CardCar car={car} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
