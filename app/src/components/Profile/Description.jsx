import React from "react";
import styled from 'styled-components';
import imagen from './images/images.jpg';
import StarFixed from "../StarFixed";
import dollar from "../imgAler/moneda.png";

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

const Money = styled.img`
    width: 25px; 
    height: 25px;
`;

const Saldo = styled.div`
    display: flex;
`;

const Usuario= styled.h1`
    font-family: Londrina Solid;
    font-size: 33px;
    background-color:#E6F8F7;
    color:#EE5D6E;
    text-align: center;
    border-radius: 10px;
`;
const Description = () => {

  return (
    <Centro>
      <Perfil src={imagen}></Perfil>
      {/* <Descripcion>
       
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, explicabo itaque totam modi, velit, atque delectus aliquam sed neque culpa rerum illo quibusdam numquam officiis inventore aliquid! Doloremque, tempora voluptate.</p> */}
      {/* </Descripcion> */} 
      <Rango>
        <Usuario>Pedro</Usuario>
        <h6>Rango: "Abuela"</h6>
        <StarFixed valor={2}/>
        <Saldo>
            <h6>Saldo: 20</h6>
            <Money src={dollar} alt='dollar'/>
        </Saldo>
      </Rango>
    </Centro>
  );
}

export default Description;
