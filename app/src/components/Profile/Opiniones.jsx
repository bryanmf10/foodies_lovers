import { Container } from "reactstrap";
import React from "react";
import styled from 'styled-components';
import imagen from './images/images.jpg';

import Perfil from "./Perfil";
import Opinion from "./Opinion";

const Chip = styled.div`
  display: inline-block;
  padding: 0 25px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: black;
  color: white;
`;

const Imagen = styled.img`
  float: left;
  margin: 0 10px 0 -25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Contenedor = styled.div`
  border: 2px solid #ccc;
  background-color: #eee;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const Review = styled.div`
  border-radius: 25px;
  width: 600px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-right: 100px;
`;

const Opiniones = () => {

  return (
    <Container>
      <Perfil />
      <div>
      </div>
      <br />
      <Contenedor>
        <Chip>
          <Imagen src={imagen} width="96" height="96" />
          <span>Julio Carpa Por Si Llueve</span>
        </Chip>
        <Review>
          <Opinion />
        </Review>
      </Contenedor>
    </Container>
  );
}

export default Opiniones;

