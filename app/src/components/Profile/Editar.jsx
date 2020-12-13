import { Container, Row, Input, FormGroup, Col, Label, Button } from "reactstrap";
import React, { useState } from "react";
import '../NewTupper.css';
import styled from 'styled-components';
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
    const [tel, setTel] = useState("");
    const [pass, setPass] = useState("");
    const [selectedFile, setSelectedFile] = useState(false);

    return (
        <Container fluid >
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
                                        <Input type="text" name="text" id="inputName" placeholder="Introduce el teléfono" value={tel} onChange={(event) => setTel(event.target.value)} />
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <FormGroup className="col-12 textoNewTupper" >
                                        <Label for="inputName" >Password</Label>
                                        <Input type="text" name="text" id="inputName" placeholder="Introduce el password" value={pass} onChange={(event) => setPass(event.target.value)} />
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
        </Container>
    );
}

export default Editar;