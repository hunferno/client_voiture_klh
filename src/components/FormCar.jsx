import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const FormCar = ({ handleSubmit }) => {
  //DEFINITION DES VARIABLES A ENVOYER EN BASE
  const [marque, setMarque] = useState("");
  const [vitesse, setVitesse] = useState(0);
  const [image, setImage] = useState("");
  const [carburant, setCarburant] = useState("");
  const [nbrKilometre, setNbrKilometre] = useState(0);
  const [nbrPorte, setNbrPorte] = useState(0);
  const [boiteVitesse, setBoiteVitesse] = useState("");
  const [couleur, setCouleur] = useState("");

  //CREATION D'UN OBJET VOITURE
  const voiture = {
    marque: marque,
    vitesse: Number(vitesse),
    image: image
      ? image
      : "https://lessentiel.macif.fr/sites/default/files/2019-03/francais-voiture.jpg",
    carburant: carburant ? carburant : null,
    kilometrage: nbrKilometre ? Number(nbrKilometre) : null,
    nbr_porte: nbrPorte ? Number(nbrPorte) : null,
    boite_de_vitesse: boiteVitesse ? boiteVitesse : null,
    couleur: couleur ? couleur : null,
  };

  return (
    <Container className="form-container">
      <Form
        className="d-flex flex-column"
        onSubmit={(e) => handleSubmit(e, voiture)}
      >
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Marque de la voiture *</Form.Label>
          <Form.Control
            onChange={(e) => setMarque(e.target.value)}
            type="text"
            placeholder="ex: Peugeot"
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Vitesse moyenne de la voiture (en km/h) *</Form.Label>
          <Form.Control
            onChange={(e) => setVitesse(e.target.value)}
            type="number"
            placeholder="ex: 175 ou 37"
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>image de la voiture (URL uniquement)</Form.Label>
          <Form.Control
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="ex: https://image025.png"
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Carburant de la voiture</Form.Label>
          <Form.Select onChange={(e) => setCarburant(e.target.value)}>
            <option value="Diesel">Diesel</option>
            <option value="Essence">Essence</option>
            <option value="Hybride">Hybride</option>
            <option value="Electrique">Électrique</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Nombre de kilometre de la voiture (en km)</Form.Label>
          <Form.Control
            onChange={(e) => setNbrKilometre(e.target.value)}
            type="number"
            placeholder="ex: 141325"
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Nombre de porte de la voiture</Form.Label>
          <Form.Control
            onChange={(e) => setNbrPorte(e.target.value)}
            type="number"
            placeholder="ex: 5"
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Boite de vitesse de la voiture</Form.Label>
          <Form.Select onChange={(e) => setBoiteVitesse(e.target.value)}>
            <option value="Manuelle">Manuelle</option>
            <option value="Automatique">Automatique</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Couleur de la voiture</Form.Label>
          <Form.Control
            onChange={(e) => setCouleur(e.target.value)}
            type="text"
            placeholder="ex: bleu-clair"
          />
        </Form.Group>

        <Button
          className="w-50 align-self-center"
          variant="primary"
          type="submit"
        >
          Enregistrer
        </Button>
      </Form>
    </Container>
  );
};

export default FormCar;
