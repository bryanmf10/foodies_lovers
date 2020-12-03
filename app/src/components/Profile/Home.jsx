import { Container } from "reactstrap";
import React from "react";
import Perfil from "./Perfil";
import Tupper from "../Tupper";

const Home = () => {
  return (
    <>
      <Container>
        <Perfil/>
        <h2>Esto es el Home</h2>
        <Tupper/>
      </Container>
    </>
  );
}

export default Home;
