import { Container, Row, Input, FormGroup, Col, Form, Label, CustomInput, Button } from "reactstrap";
import React, { useState } from "react";
import './NewTupper.css';

import styled from 'styled-components';
import TupperController from '../controller/TuperController';

const Foto = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    background-image: url(${props => props.imagSrc});
    background-size: cover;
    background-position: center;

   
`;

const SubirTupper = (props) => {
    const [nom, setNom] = useState("");
    const [des, setDes] = useState("");
    const [alergias, setAlergias] = useState("");
    const [img, setImg] = useState("");
    const [ingredientes, setingredientes] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let tuper = {
            nombre: nom,

        }
        TupperController.getOne(tuper)
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    return (
        <>
            <Container fluid >
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Col className="col-sm-12 col-md-6  offset-md-3  cuerpoRegistro tituloSubirTupper text-center" >
                        New tupper
                    </Col>
                    <Row form >
                        <Col className=" col-sm-12 col-md-3 p-3 mr-1 offset-md-3  cuerpoRegistro " >
                            <Row className="justify-content-center">
                            <Foto imagSrc="https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/recipe/5d5d03125bafe8dc49b479ab/ensalada-de-aguacates-int.jpg"></Foto>
                            </Row>
                            <Row >
                            <FormGroup className="image-upload text-right mr-2 mt-2">
                                    <Label for="file-input">
                                       <i class="fa fa-camera-retro fa-2x" aria-hidden="true" ></i>     
                                    </Label>
                                        <Input id="file-input" type="file" required/>     
                            </FormGroup>
                            </Row>
                            <Row className="justify-content-center">
                            <FormGroup className="precio text-center" required >
                              
                                <div>
                                    <CustomInput type="radio" id="CustomRadio2" name="customRadio" label="1 Tok" inline />
                                    <CustomInput type="radio" id="CustomRadio2" name="customRadio" label="2 Tok" inline />
                                    <CustomInput type="radio" id="CustomRadio3" name="customRadio" label="3 Tok" inline />
                                    <CustomInput type="radio" id="CustomRadio4" name="customRadio" label="Solo acepto Tup" inline />
                                </div>
                            </FormGroup>
                            </Row>
                      
                        </Col>
                            <Col className="  col-sm-12 col-md-3 p-3 cuerpoRegistro "   >
                                <FormGroup >
                                    <Label for="inputName"  >Nombre</Label>
                                    <Input className="input" type="text" name="text" id="inputName" placeholder="Introduce el nombre de tu Tupper" value={nom} onChange={(event) => setNom(event.target.value)}  required/>
                                </FormGroup>
                                <FormGroup >
                                    <Label for="inputDescripcion"  >Descripción</Label>
                                    <Input className="input" type="textarea" name="text" id="inputDescripcion" placeholder="Datos relevantes del tupper" maxLength="100" value={des} onChange={(event) => setDes(event.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Checkbox" >...</Label>
                                    <div>
                                        <CustomInput type="switch" id="CustomSwitch" name="customSwitch" label="Vegano" />
                                        <CustomInput type="switch" id="CustomSwitch2" name="customSwitch" label="Vegetariano" />
                                        <CustomInput type="switch" id="CustomSwitch3" name="customSwitch" label=" Sin gluten" />
                                        <CustomInput type="switch" id="CustomSwitch4" name="customSwitch" label=" Sin lactosa" />
                                        <CustomInput type="switch" id="CustomSwitch5" name="customSwitch" label=" Sin frutos secos" />
                                    </div>
                                </FormGroup>
                            </Col>
                    </Row>
                        <Col className="col-sm-12 col-md-6  offset-md-3  cuerpoRegistro" >
                            <Label className="ingredientes" for="Text" sm={2} >Ingredientes</Label>
                            <FormGroup check >
                                <Label check>
                                    <Input type="checkbox" /> Huevos
                              </Label>
                            </FormGroup>
                            <FormGroup check >
                                <Label check>
                                    <Input type="checkbox" /> Patata
                             </Label>
                            </FormGroup>
                            <FormGroup check >
                                <Label check>
                                    <Input type="checkbox" /> chocolate
                             </Label>
                            </FormGroup>
                            <FormGroup check >
                                <Label check>
                                    <Input type="checkbox" /> Pasta
                             </Label>
                            </FormGroup>
                            <FormGroup check >
                                <Label check>
                                    <Input type="checkbox" /> Sin frutos secos
                             </Label>
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-12 col-md-6  offset-md-3 mt-2 text-center" >
                            <Button style={{ backgroundColor: '#EE5D6E', border: "none", color: "#E6F8F7", fontFamily: "Londrina Solid" }}>Publicar mi tupper</Button>
                        </Col>
                </Form>
            </Container>
        </>
    );
}

export default SubirTupper;