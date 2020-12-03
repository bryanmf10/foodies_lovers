import { Container } from "reactstrap";
import React from "react";
import styled from 'styled-components';
import imagen from './images/images.jpg';
import Perfil from "./Perfil";

import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

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

const Opinion = styled.div`
  border-radius: 25px;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin-right: 80px;
`;

const Stars = styled.div`
  color: orange;
`;

const Opiniones = () => {
  return (
    <>
      <Container>
      <Perfil/>
      <div>
      </div>
      <h2>Esto es el Opiniones</h2>
      
      <Contenedor>
        <Chip>
          <Imagen src={imagen} width="96" height="96" />
          <span>Julio Carpa Por Si Llueve</span>
        </Chip>
        <Opinion>
          <span>Lorem, ipsum dolor.</span>
          <Stars>
            <span><FaStar /></span>
            <span><FaStar /></span>
            <span><FaStar /></span>
            <span><FiStar /></span>
            <span><FiStar /></span>
          </Stars>
        </Opinion>
      </Contenedor>
      </Container>
      
    </>
  );
}

export default Opiniones;

