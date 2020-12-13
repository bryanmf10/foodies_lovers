import { Container, Row, Input, FormGroup, Col, Form, Label, Button } from "reactstrap";
import React, { useState, useContext } from "react";
import '../NewTupper.css';
import styled from 'styled-components';
import TupperController from '../../controller/TuperController';
import Context from "../../context/Context";
import TokenController from "../../controller/TokenController";
import { Redirect, Link } from "react-router-dom";
import imagen from './images/images.jpg';

const Foto = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    background-image: url(${props => props.imagSrc});
    background-size: cover;
    background-position: center; 
`;

const TituloSubirTupper = styled.h2`
    font-size: 30px;
    text-align: center;
    font-family: Londrina Solid;
`;

const AnadirTupper = styled.h3`
    font-family: Londrina Solid;
    font-size: 20px;
    color: #EE5D6E;
    text-align: center;
`;

const Editar = (props) => {
    const [nom, setNom] = useState("");
    const [des, setDes] = useState("");
    const [selectedFile, setSelectedFile] = useState(false);
    const [loading, setLoading] = useState(null);
    const context = useContext(Context);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const tuper = new FormData();
    //     tuper.append("file", selectedFile);
    //     tuper.append("titulo", nom);
    //     tuper.append("descripcion", des);
    //     tuper.append("longitud", props.coords.longitude);
    //     tuper.append("latitud", props.coords.latitude);
    //     tuper.append("isSold", 0);
    //     tuper.append("usuarios_id_usuarios", TokenController.getIdUser(context.token));
    //     tuper.append("cooking_date", new Date().toISOString().split('T')[0]);
    //     TupperController.insertOne(tuper, context.token)
    //         .then(data => setLoading(true))
    //         .catch(error => console.log(error));
    // }


    // if (loading) {
    //     return <Redirect to="/" />;
    // }

    return (
        <Container fluid >
            {/* <Form onSubmit={(event) => handleSubmit(event)} > */}
                <TituloSubirTupper>Editar</TituloSubirTupper>
                <AnadirTupper>¿Quieres modificar tu foto de perfíl?
                        <FormGroup className="image-upload mt-1">
                        <Label for="file-input">
                            <i class="fa fa-camera-retro fa-2x" aria-hidden="true" ></i>
                        </Label>
                        <Input id="file-input" type="file" name="customFile" onChange={(e) => setSelectedFile(e.target.files[0])} />
                    </FormGroup>
                </AnadirTupper>
                <Row className="justify-content-center ">
                    <Col sm={12} md={6}>
                        <Row className="cuerpoNewTupper"> </Row>
                        <Row className="mt-2 ">
                            <Col sm={6} >
                                <Row className="justify-content-center">
                                    <Foto imagSrc={imagen}></Foto>
                                </Row>
                            </Col>
                            <Col sm={6} className="fondoNewTupper ">
                                <Row>
                                    <FormGroup className="col-12 textoNewTupper" >
                                        <Label for="inputName" >Teléfono</Label>
                                        <Input type="text" name="text" id="inputName" placeholder="Introduce el teléfono" value={nom} onChange={(event) => setNom(event.target.value)} />
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup className="col-12 textoNewTupper" >
                                        <Label for="inputName" >Password</Label>
                                        <Input type="text" name="text" id="inputName" placeholder="Introduce el password" value={nom} onChange={(event) => setNom(event.target.value)} />
                                    </FormGroup>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Button className="col-sm-12 col-md-4 text-center boton mt-2 " style={{ backgroundColor: '#EE5D6E', border: "none", color: "#E6F8F7", fontFamily: "Londrina Solid", textAlign: "center" }}>Guardar</Button>
                            <a className="btn col-sm-12 col-md-4 text-center boton mt-2 " href="/perfil" style={{ backgroundColor: '#5b4dda', border: "none", color: "#E6F8F7", fontFamily: "Londrina Solid", textAlign: "center" }} >Cancelar</a>
                        </Row>
                    </Col>
                </Row>
            {/* </Form> */}
        </Container>
    );
}

export default Editar;