import { Container } from "reactstrap";
import React from "react";

import Perfil from "./Perfil";
import Tupper from "../Tupper";

const TupperOfrecidos = () => {
  return (
    <>
      <Container>
        <Perfil />
        <h2>Esto es el TupperOfrecidos</h2>
        <Tupper/>
      </Container>
    </>
  );
}

export default TupperOfrecidos;
