import React, { useEffect, useContext, useState } from "react";
import styled from 'styled-components';
import imagen from './images/images.jpg';
import StarFixed from "../StarFixed";
import dollar from "./images/dollar.svg";
import Context from "../../context/Context";
import UserController from "../../controller/UserController";
import TokenController from "../../controller/TokenController";

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
  const context = useContext(Context);
  const [user, setUser] = useState({email: "", ranking: {titulo: ""}});
  useEffect(()=> {
    UserController.getUser(TokenController.getIdUser(context.token),context.token)
    .then((user) => {
      if(user.ok) {
        if(user.resp.fotoURL !== null) user.resp.fotoURL = UserController.getUrlFoto(user.resp.fotoURL);
        setUser(user.resp);
      };
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <Centro>
      <Perfil src={user.fotoURL !== null ? user.fotoURL : imagen}></Perfil>
      <Rango>
        <Usuario>{user.email.split("@")[0]}</Usuario>
        <h6>Rango: "{user.ranking.titulo}"</h6>
        <StarFixed valor={2}/>
        <Saldo>
            <h6>Saldo: {user.tickets}</h6>
            <Money src={dollar} alt='dollar'/>
        </Saldo>
      </Rango>
    </Centro>
  );
}

export default Description;
