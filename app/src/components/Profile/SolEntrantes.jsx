import React, { useEffect, useState, useContext } from "react";
import { Button, Container, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from "styled-components";

import Perfil from "./Perfil";
import StarFixed from "../StarFixed";

import Context from "../../context/Context";
import TuperController from '../../controller/TuperController';
import OfertasController from "../../controller/OfertasController";
import TokenController from "../../controller/TokenController";
import Detalle from "../Detalle";

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
    height: 80px;
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
    scroll-padding-block: 30px;
    display: flex;
    flex-flow: column wrap;
`;

const Divider = styled.div`
    border-left: 1px solid black;
`;

const Botones = styled.div`
    display: flex;
    justify-Content: space-around;
    margin-Bottom: 20px;
`;

const SolEntrantes = (props) => {
  const context = useContext(Context);
  const [listaTupers, setListaTupers] = useState([]);

  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    OfertasController.getMyOfertas(TokenController.getIdUser(context.token), context.token)
      .then(data => {
        if (data.ok === false) {
          setListaTupers([]);
        } else {
          console.log(data)
          setListaTupers(data.resp);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const tuppers = listaTupers.length === 0 ? null : listaTupers.map((el) => (
    <Box key={el.id} className="col-lg-3  col-sm-6 col-12">
      {/* <Foto imagSrc={el.tuper.urlFoto} /> */}
      <Foto imagSrc="https://www.lavanguardia.com/files/article_main_microformat/uploads/2018/06/01/5e99784964d1d.jpeg" />
      <Info>
        <Title>
          {el.tuper.titulo}
        </Title>
        <Usuario >
          <StarFixed valor={el.id_ranking} />
          <span>{el.usuario.email.split('@')[0]}</span>
          <a onClick={toggle}><i className="fa fa-eye fa-2x" aria-hidden="true" style={{ color: "#EE5D6E" }}></i></a>
          {el.comentario}
        </Usuario>
        <Description>
          {el.tuper.descripcion}
        </Description>
        <Botones>
          <Button color="warning">Aceptar</Button>
          <Divider />
          <Button color="danger" onClick={() => refreshTupers(el.id)}>Rechazar</Button>
        </Botones>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>{el.tuper.titulo}</ModalHeader>
          <ModalBody>
              <p>{el.tuper.descripcion}</p>
              <h6>Ingredientes:</h6>
              {el.tuper.ingredientes}
              <br/>
              <h6>El plato fue preparado el:</h6>
              {el.tuper.cooking_date}
              <h6>Lactosa:</h6>
              { el.tuper.hasLactosa && <h1>verdadero: {el.tuper.hasLactosa}</h1>}
              {/* {el.tuper.hasLactosa} === 0 ? <h2>falso</h2> : <h2>verdadero</h2>} */}
        </ModalBody>
        </Modal>
      </Info>
    </Box>
  ));

  const refreshTupers = (e) => {
    let newArray = [...listaTupers];
    let removeIndex = newArray.map(function (item) { return item.id; }).indexOf(e);
    newArray.splice(removeIndex, 1);
    setListaTupers(newArray);
  };

  console.log("listaTupers");
  console.log(listaTupers);

  return (
    <Container>
      <Perfil />
      <br />
      <Container fluid>
        <Row className="w-100">
          {tuppers}
        </Row>
      </Container>
    </Container>
  );
}

export default SolEntrantes;
