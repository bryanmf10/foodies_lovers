import React, { useEffect, useState, useContext } from "react";
import { Button, Container, Row } from "reactstrap";
import styled from "styled-components";

import Data from "./data/SolEntrantes.json"
import Perfil from "./Perfil";
import StarFixed from "../StarFixed";

import Context from "../../context/Context";
import TuperController from '../../controller/TuperController';

const Foto = styled.div`
    width: 90%;
    height: 200px;
    display: inline-block;
    background-image: url(${props => props.imagSrc});
    background-size: cover;
    background-position: center;
`;

const Box = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 100vw;
    max-height: 150vh;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    margin-Top: 10px;
    font-Size: 25px;
    margin-left: 10px;
    height: 50px;
    font-family: 'Londrina Solid', cursive;
`;

const Info = styled.div`
    font-family: Trispace, sans-serif;
    background-color: #E6F8F7;
    width: 90%;
    margin-bottom: 15px;
`;

const Description = styled.div`
    margin: 10px;
    font-Size: 13px; 
    text-align: justify;
    font-weight: bold;
    overflow: scroll; 
    height: 80px;
`;

const Usuario = styled.div`
    text-Align: right;
    margin: 5px; 
    font-Size: 13px;
    scroll-padding-block: 30px,
`;

const Divider = styled.div`
    border-left: 1px solid black;
`;

const Botones = styled.div`
    display: flex;
    justify-Content: space-around;
    margin-Bottom: 20px;
`;

const SolEntrantes = () => {
  const context = useContext(Context);
  const [listaTupers, setListaTupers] = useState([]);
  const [mostrar, setMostrar] = useState([]);
  const [ver, setVer] = useState([]);


  useEffect(() => {
    TuperController.getAll(context.token)
      .then(data => {
        if (data.ok === false) {
          setListaTupers([]);
        } else {
          setListaTupers(data.resp);
        }
      })
      .catch(err => console.log(err));
  }, []);


  console.log("listaTupers");
  console.log(listaTupers);
  // API SECTION (UNCOMMENT TO USE /* */)
  /*const [listaTupers, setListaTupers] = useState([]);

  useEffect(() => {
    TuperController.getAll()
      .then(data => {
        console.log(data);
        if (data.ok === false) {
          setListaTupers([]);
        } else {
          setListaTupers(data);
        }
      })
      .catch(err => console.log(err));
  }, []);
*/
  // const tuppers = listaTupers.length === 0 ? <p>No se han encontrado tupers</p> : listaTupers.map((el) => (
  //   // const tuppers = Data.map((el) => (
  //   <Box key={el.id} className="col-lg-3  col-sm-6 col-12">
  //     <Foto imagSrc={el.urlFoto} />
  //     <Info>
  //       <Title>
  //         {el.titulo}
  //       </Title>
  //       <Usuario >
  //         <StarFixed valor={el.id_ranking} />
  //         <br />
  //         <span>{el.user}</span>
  //       </Usuario>
  //       <Description>
  //         {el.descripcion}
  //       </Description>
  //       <Botones>
  //         <Button color="warning">Aceptar</Button>
  //         <Divider />
  //         <Button color="danger" onClick={() => hablar(el.id)}>Rechazar</Button>
  //       </Botones>
  //     </Info>
  //   </Box>
  // ));

  const tuppers = listaTupers.length === 0 ? null : listaTupers.map((el) => (
    <Box key={el.id} className="col-lg-3  col-sm-6 col-12">
      <Foto imagSrc={el.urlFoto} />
      <Info>
        <Title>
          {el.titulo}
        </Title>
        <Usuario >
          <StarFixed valor={el.id_ranking} />
          <br />
          <span>{el.user}</span>
        </Usuario>
        <Description>
          {el.descripcion}
        </Description>
        <Botones>
          <Button color="warning">Aceptar</Button>
          <Divider />
          <Button color="danger" onClick={() => hablar(el.id)}>Rechazar</Button>
        </Botones>
      </Info>
    </Box>
  ));

  const hablar = (e) => {
    let newArray = [...listaTupers];
    let removeIndex = newArray.map(function (item) { return item.id; }).indexOf(e);
    newArray.splice(removeIndex, 1);
    setListaTupers(newArray);
  }

  return (
    <Container>
      <Perfil />
      <Container fluid>
        <Row style={{ paddingTop: "30px" }} className="w-100">
          {tuppers}
        </Row>
      </Container>
    </Container>
  );
}

export default SolEntrantes;
