import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const FormSpeedTest = ({ cars, handleSubmit, setDistance }) => {
  //CREATION DES VARIABLE A ENVOYER
  const [carId, setCarId] = useState(0);

  return (
    <Container className="form-container">
      <Form
        className="d-flex flex-column"
        onSubmit={(e) => handleSubmit(e, Number(carId))}
      >
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Veuillez selectionner une voiture </Form.Label>
          <Form.Select onChange={(e) => setCarId(e.target.value)} required>
            <option disabled selected>
              Selectionner...
            </option>
            {cars &&
              cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.marque}
                </option>
              ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>
            Veuillez entrer la distance à parcourir (en km)
          </Form.Label>
          <Form.Control
            required
            onChange={(e) => setDistance(e.target.value)}
            type="number"
            placeholder="ex: 121"
            // value={nbrKilometre}
          />
        </Form.Group>

        <Button
          className="w-50 align-self-center"
          variant="primary"
          type="submit"
        >
          Lancer la simulation
        </Button>
      </Form>
    </Container>
  );
};

export default FormSpeedTest;
