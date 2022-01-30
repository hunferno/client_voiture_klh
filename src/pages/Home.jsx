import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import CardCar from "../components/CardCar";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  //STOCKAGE DE LA DONNÉE
  const [cars, setCars] = useState([]);
  const [update, setUpdate] = useState(false);

  //RECUPERATION DE LA DONNÉE VIA AXIOS
  useEffect(() => {
    axios
      .get("http://localhost:8000/voiture/afficher_toutes_les_voitures")
      .then((res) => setCars(res.data));
  }, [update]);

  //CREATION DE LA FONCTION DE SUPPRESSION DE VOITURE
  const handleDelete = (id) => {
    axios
      .post(`http://localhost:8000/voiture/supprimer_la_voiture/${id}`)
      .then((res) => console.log(res))
      .then(() => setUpdate(!update));
  };

  return (
    <div className="home_container">
      <h1>PARC AUTOMOBILE - KLH</h1>
      <Header />
      <Container>
        <Row>
          {cars &&
            cars.map((car) => (
              <Col key={car.id} sm={4}>
                <CardCar car={car} handleDelete={handleDelete} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
