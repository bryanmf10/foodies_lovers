import { Container } from "reactstrap";
import React from "react";
import Perfil from "./Perfil";
import Tupper from "../Tupper";

const SolEntrantes = () => {
  return (
    <>
      <Container>
        <Perfil />
        <h2>Esto es el SolEntrantes</h2>
        <Tupper/>
      </Container>
    </>
  );
}

export default SolEntrantes;
