import React from "react";
import styled from 'styled-components';
import imagen from './images/images.jpg';

import StarFixed from "../StarFixed";

const Rango = styled.div`
  border-radius: 25px;
  padding: 20px; 
  width: 200px;
  height: 150px;
`;
const Centro = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Perfil = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  box-shadow: 0 0 .25em .25em rgba(0, 0, 0, 0.25);
`;

const Descripcion = styled.div`
  border-radius: 25px;
  padding: 20px; 
  width: 50%;
  height: 30%;
`;

const Description = () => {

  return (
    <Centro>
      <Perfil src={imagen}></Perfil>
      <Descripcion>
        <h6>Pedro</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, explicabo itaque totam modi, velit, atque delectus aliquam sed neque culpa rerum illo quibusdam numquam officiis inventore aliquid! Doloremque, tempora voluptate.</p>
      </Descripcion>
      <Rango>
        Rango: "Abuela"
        <StarFixed valor={2}/>
      </Rango>
    </Centro>
  );
}

export default Description;
