import { Container } from "reactstrap";
import React from "react";

import Perfil from "./Perfil";
import Tupper from "../Tupper";

const TuppersOfrecidos = () => {
  return (
    <Container>
      <Perfil />
      <br/>
      {/* <h2>Esto es el TupperOfrecidos</h2> */}
      <Tupper />
    </Container>
  );
}

export default TuppersOfrecidos;
