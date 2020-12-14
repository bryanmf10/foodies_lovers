import React, { useEffect, useState, useContext } from "react";
import { Button, Container, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from "styled-components";

import Perfil from "./Perfil";
import StarFixed from "../StarFixed";

import Context from "../../context/Context";
import TuperController from '../../controller/TuperController';
import OfertasController from "../../controller/OfertasController";
import TokenController from "../../controller/TokenController";

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

const SolEntrantes = () => {
  const context = useContext(Context);
  const [listaTupers, setListaTupers] = useState([]);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    OfertasController.getMyOfertas(TokenController.getIdUser(context.token), context.token)
      .then(data => {
        if (data.ok === false) {
          setListaTupers([]);
        } else {
          let tupers = data.resp.map((el)=>{
            el.urlFoto = TuperController.getUrlFoto(el.tuper.urlFoto);
            return el;
          })
          setListaTupers(tupers);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const tuppers = listaTupers.length === 0 ? null : listaTupers.map((el) => (
    <Box key={el.id} className="col-lg-3 col-sm-6 col-12">
<<<<<<< HEAD
      <Foto imagSrc={el.urlFoto} />
      {/* <Foto imagSrc="https://www.ecestaticos.com/image/clipping/bb50de49b6df856a70062fad7cb388b7/made-in-spain-prepara-el-autentico-gazpacho-andaluz.jpg"/> */}
=======
      <Foto imagSrc={el.urlFoto}/>
>>>>>>> 09b22a86d897af748f67eafc6dc3a28bb11ab775
      <Info>
        <Title>
          {el.tuper.titulo}
        </Title>
        <Usuario >
          <StarFixed valor={el.id_ranking} />
          <span>{el.usuario.email.split('@')[0]}</span>
          <a onClick={toggle}><i className="fa fa-eye fa-2x" aria-hidden="true" style={{ color: "#EE5D6E" }}></i></a>
          <b><i>{el.comentario}</i></b>
        </Usuario>
        <Description>
          {el.tuper.descripcion}
        </Description>
        <Botones>
          <Button color="warning">Aceptar</Button>
          <Divider />
          <Button color="danger" onClick={() => refreshTupers(el.id)}>Rechazar</Button>
        </Botones>
        
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{el.tuper.titulo}</ModalHeader>
          <ModalBody>
            <p>{el.tuper.descripcion}</p>
            <h6>Ingredientes:</h6>
            <p>{el.tuper.ingredientes}</p>
            <h6>El plato fue preparado el:</h6>
            <p>{el.tuper.cooking_date}</p>
            <h6>Información nutricional:</h6>
            {el.tuper.hasFrutosSecos && <p>Tiene frutos secos {el.tuper.hasFrutosSecos}</p>}
            {el.tuper.hasGluten && <p>Tiene gluten {el.tuper.hasGluten}</p>}
            {el.tuper.hasLactosa && <p>Tiene gluten {el.tuper.hasLactosa}</p>}
            {el.tuper.vegan && <p>Apta para veganos {el.tuper.vegan}</p>}
            {el.tuper.vegetarian && <p>Apta para vegetarianos {el.tuper.vegetarian}</p>}
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
