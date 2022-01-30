import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Row, Col } from "react-bootstrap";

export default function CardCar({ car, handleDelete }) {
  return (
    <div className="card_container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={car.image} style={{ height: "160px" }} />
        <Card.Body>
          <Card.Title>{car.marque}</Card.Title>
          <Row>
            <Col>
              <NavLink to={`/single-car/${car.id}`} className={"link-to-page"}>
                <Button
                  variant="primary"
                  className={
                    "d-flex w-100 align-items-center justify-content-center"
                  }
                >
                  <i class="far fa-eye"></i>
                </Button>
              </NavLink>
            </Col>
            <Col>
              <Button
                variant="primary"
                className={
                  "d-flex w-100 align-items-center justify-content-center"
                }
                onClick={() => handleDelete(car.id)}
              >
                <i class="fas fa-trash-alt"></i>
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
