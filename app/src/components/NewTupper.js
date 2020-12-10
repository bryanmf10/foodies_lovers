import { Container, Row, Input, FormGroup, Col, Form, Label, CustomInput, Button } from "reactstrap";
import React,{useState} from "react";
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
    margin-left:47px;
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
                        <Col className=" col-sm-12 col-md-3 p-3 offset-md-3  cuerpoRegistro " >
                            <Foto imagSrc="https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/recipe/5d5d03125bafe8dc49b479ab/ensalada-de-aguacates-int.jpg"></Foto>
                            <FormGroup className="precio  text-center" >
                                <Label for="exampleCheckbox"> </Label>
                                <div>
                                    <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="1 $" inline />
                                    <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="2 $" inline />
                                    <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="  3 $" inline />
                                    <CustomInput type="radio" id="exampleCustomRadio4" name="customRadio" label="Solo acepto Tupper" inline />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <CustomInput className="fototupper text-center" type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!" />
                            </FormGroup>
                        </Col>
                        <Col className="  col-sm-12 col-md-3 p-3 cuerpoRegistro "   >
                            <FormGroup >
                                <Label for="exampleText"  >Nombre</Label>
                                <Input className="input" type="text" name="text" id="exampleText" placeholder="Introduce el nombre de tu Tupper" value={nom} onChange={(event) =>setNom(event.target.value)} />
                            </FormGroup>
                            <FormGroup >
                                <Label for="exampleText"  >Descripción</Label>
                                <Input className="input" type="textarea" name="text" id="exampleText" placeholder="Datos relevantes del tupper" maxLength="100" value={des} onChange={(event) =>setDes(event.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleCheckbox">...</Label>
                                <div>
                                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Vegano" />
                                    <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Vegetariano" />
                                    <CustomInput type="switch" id="exampleCustomSwitch3" name="customSwitch" label=" Sin gluten" />
                                    <CustomInput type="switch" id="exampleCustomSwitch4" name="customSwitch" label=" Sin lactosa" />
                                    <CustomInput type="switch" id="exampleCustomSwitch5" name="customSwitch" label=" Sin frutos secos" />
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Col className="col-sm-12 col-md-6  offset-md-3  cuerpoRegistro" >
                        <Label for="exampleText" sm={2} >Ingredientes</Label>
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
                    <Col className="col-sm-12 col-md-6  offset-md-3  cuerpoRegistro text-center" >
                        <Button>Submit</Button>
                    </Col>
                </Form>
            </Container>
        </>
    );
}

export default SubirTupper;