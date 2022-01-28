import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Row, Col } from "react-bootstrap";

export default function CardCar({ car }) {
  return (
    <div className="card_container">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          // src={car.image ? car.image : "../assets/default_car.jpg"}
          src="https://lessentiel.macif.fr/sites/default/files/2019-03/francais-voiture.jpg"
        />
        <Card.Body>
          <Card.Title>{car.marque}</Card.Title>
          <Row>
            <Col>
              <NavLink to={`/single-car/${car.id}`}>
                <Button variant="primary" sm={4}>
                  <i class="far fa-eye"></i>
                </Button>
              </NavLink>
            </Col>
            <Col>
              <NavLink to={"/"}>
                <Button variant="primary" sm={4}>
                  <i class="far fa-edit"></i>
                </Button>
              </NavLink>
            </Col>
            <Col>
              <a
                href={`http://localhost:8000/voiture/supprimer_la_voiture/${car.id}`}
                className="btn btn-primary"
              >
                <i class="fas fa-trash-alt"></i>
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
