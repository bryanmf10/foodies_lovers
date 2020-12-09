import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import styled from "styled-components";
import TuperController from '../../controller/TuperController';

import Prueba from "../Prueba.json"
import Perfil from "./Perfil"

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

const Divider = styled.div`
    border-left: 1px solid black;
`;

const Botones = styled.div`
    display: flex;
    justify-Content: space-around;
    margin-Bottom: 20px;
`;

const TuppersOfrecidos = () => {

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

  const tuppers = listaTupers.length === 0 ? <p>No se han encontrado tupers</p> : listaTupers.map((el) => (*/
  const tuppers = Prueba.map((el) => (
    <Box key={el.id} className="col-lg-3  col-sm-6 col-12">
      <Foto imagSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkmQWnBItsHZQnSceNTIjUpk4PaH7NnUC8w&usqp=CAU"} />
      <Info>
        <Title>
          {el.titulo}
        </Title>
        <Description>
          {el.descripcion}
        </Description>
        <Botones>
          <Button color="warning">Ofrecer</Button>
          <Divider />
          <Button color="danger">Eliminar</Button>
        </Botones>
      </Info>
    </Box>
  ));
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

export default TuppersOfrecidos;
