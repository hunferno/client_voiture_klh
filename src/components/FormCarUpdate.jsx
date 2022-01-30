import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";

const FormCarUpdate = ({ handleSubmit, car }) => {
  //DEFINITION DES VARIABLES A ENVOYER EN BASE
  const [marque, setMarque] = useState("");
  const [vitesse, setVitesse] = useState(0);
  const [image, setImage] = useState("");
  const [carburant, setCarburant] = useState("");
  const [nbrKilometre, setNbrKilometre] = useState(0);
  const [nbrPorte, setNbrPorte] = useState(0);
  const [boiteVitesse, setBoiteVitesse] = useState("");
  const [couleur, setCouleur] = useState("");

  useEffect(() => {
    setMarque(car.marque);
    setVitesse(car.vitesse);
    setImage(car.image);
    setCarburant(car.carburant);
    setNbrKilometre(car.kilometrage);
    setNbrPorte(car.nbrPorte);
    setBoiteVitesse(car.boiteDeVitesse);
    setCouleur(car.couleur);
  }, []);

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

  // const handleTest = (e) => {
  //   e.preventDefault();
  //   console.log(voiture);
  // };

  return (
    <Container className="form-container">
      <Form
        className="d-flex flex-column"
        onSubmit={(e) => handleSubmit(e, voiture)}
        // onSubmit={(e) => handleTest(e)}
      >
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Marque de la voiture *</Form.Label>
          <Form.Control
            onChange={(e) => setMarque(e.target.value)}
            type="text"
            placeholder="ex: Peugeot"
            value={marque}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Vitesse moyenne de la voiture (en km/h) *</Form.Label>
          <Form.Control
            onChange={(e) => setVitesse(e.target.value)}
            type="number"
            placeholder="ex: 175 ou 37"
            value={vitesse}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>image de la voiture (URL uniquement)</Form.Label>
          <Form.Control
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="ex: https://image025.png"
            value={image}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Carburant de la voiture</Form.Label>
          <Form.Select
            onChange={(e) => setCarburant(e.target.value)}
            value={carburant}
          >
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
            value={nbrKilometre}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Nombre de porte de la voiture</Form.Label>
          <Form.Control
            onChange={(e) => setNbrPorte(e.target.value)}
            type="number"
            placeholder="ex: 5"
            value={nbrPorte}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Boite de vitesse de la voiture</Form.Label>
          <Form.Select
            onChange={(e) => setBoiteVitesse(e.target.value)}
            value={boiteVitesse}
          >
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
            value={couleur}
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

export default FormCarUpdate;
