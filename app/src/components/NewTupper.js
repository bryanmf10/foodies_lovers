import { Container, Row, Input, FormGroup, Col, Form, Label, CustomInput, Button } from "reactstrap";
import React,{useState, useContext} from "react";
import './NewTupper.css';
import { geolocated } from "react-geolocated";
import styled from 'styled-components';
import TupperController from '../controller/TuperController';
import Context from "../context/Context";
import TokenController from "../controller/TokenController";

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
    const [ingredientes, setIngredientes] = useState([]);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const [hasFrutosSecos, setHasFrutosSecos] = useState(false);
    const [hasLactosa, setHasLactosa] = useState(false);
    const [hasGluten, setHasGluten] = useState(false);
    const [valor,setValor] = useState("");
    const [selectedFile, setSelectedFile] = useState(false);
    const context = useContext(Context);

    const handleSubmit = (event) => {
        event.preventDefault();
        const tuper = new FormData();
            tuper.append("file", selectedFile);
            tuper.append("titulo", nom);
            tuper.append("descripcion", des);
            tuper.append("longitud", props.coords.longitude);
            tuper.append("latitud", props.coords.latitude);
            tuper.append("isSold", 0);
            tuper.append("vegan", vegan);
            tuper.append("vegetarian", vegetarian);
            tuper.append("hasFrutosSecos", hasFrutosSecos);
            tuper.append("hasLactosa", hasLactosa);
            tuper.append("hasGluten", hasGluten);
            tuper.append("usuarios_id_usuarios", TokenController.getIdUser(context.token));
            tuper.append("cooking_date", new Date().toISOString().split('T')[0]);
            tuper.append("valor_tamano", valor);
            tuper.append("ingredientes", ingredientes.join(","));
        console.log(tuper);
        /*TupperController.insertOne(tuper,context.token)
          .then(data => console.log(data))
          .catch(error => console.log(error));*/
      }

      const añadeIngrediente = (ingr) => {
        let newArray = [...ingredientes];
        if(newArray.includes(ingr)){
            let arrayIndex = newArray.indexOf(ingr);
            if(arrayIndex !== -1) newArray.splice(arrayIndex,1);
        }else if(!newArray.includes(ingr)){
            newArray.push(ingr);
        }
        setIngredientes(newArray);
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
                            <Row>
                            <Foto imagSrc="https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/recipe/5d5d03125bafe8dc49b479ab/ensalada-de-aguacates-int.jpg"></Foto>
                            </Row>
                            <Row>
                            <FormGroup className="precio  text-center" >
                                <div>
                                    <CustomInput type="radio" id="tamano1" value="1" onChange={(event) => setValor(event.target.value)} name="customRadio" label="1 $" inline />
                                    <CustomInput type="radio" id="tamano2" value="2" onChange={(event) => setValor(event.target.value)} name="customRadio" label="2 $" inline />
                                    <CustomInput type="radio" id="tamano3" value="3" onChange={(event) => setValor(event.target.value)} name="customRadio" label="3 $" inline />
                                    <CustomInput type="radio" id="tamano0" value="0" onChange={(event) => setValor(event.target.value)} name="customRadio" label="Solo acepto Tupper" inline />
                                </div>
                            </FormGroup>
                            </Row>
                            <Row>
                            <FormGroup>
                                <CustomInput className="fototupper text-center" type="file" id="inputFoto" name="customFile" label="Yo, pick a file!" onChange={(e) => setSelectedFile(e.target.files[0])} />
                            </FormGroup>
                            </Row>
                        </Col>
                        <Col className="  col-sm-12 col-md-3 p-3 cuerpoRegistro "   >
                            <FormGroup >
                                <Label for="inputName"  >Nombre</Label>
                                <Input className="input" type="text" name="text" id="inputName" placeholder="Introduce el nombre de tu Tupper" value={nom} onChange={(event) =>setNom(event.target.value)} />
                            </FormGroup>
                            <FormGroup >
                                <Label for="exampleText"  >Descripción</Label>
                                <Input className="input" type="textarea" name="text" id="exampleText" placeholder="Datos relevantes del tupper" maxLength="100" value={des} onChange={(event) =>setDes(event.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleCheckbox">...</Label>
                                <div>
                                    <CustomInput type="switch" id="vegano" checked={vegan} onChange={(event) => setVegan(event.target.checked)} name="customSwitch" label="Vegano" />
                                    <CustomInput type="switch" id="vegetarian" checked={vegetarian} onChange={(event) => setVegetarian(event.target.checked)} name="customSwitch" label="Vegetariano" />
                                    <CustomInput type="switch" id="hasGluten" checked={hasGluten} onChange={(event) => setHasGluten(event.target.checked)} name="customSwitch" label=" Sin gluten" />
                                    <CustomInput type="switch" id="hasLactosa" checked={hasLactosa} onChange={(event) => setHasLactosa(event.target.checked)} name="customSwitch" label=" Sin lactosa" />
                                    <CustomInput type="switch" id="hasFrutosSecos" checked={hasFrutosSecos} onChange={(event) => setHasFrutosSecos(event.target.checked)} name="customSwitch" label=" Sin frutos secos" />
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Col className="col-sm-12 col-md-6  offset-md-3  cuerpoRegistro" >
                        <Label for="exampleText" sm={2} >Ingredientes</Label>
                        <FormGroup check >
                            <Label check>
                                <Input type="checkbox" value="Huevos" onChange={(event) => {añadeIngrediente(event.target.value)}} /> Huevos
                              </Label>
                        </FormGroup>
                        <FormGroup check >
                            <Label check>
                                <Input type="checkbox" value="Patata" onChange={(event) => {añadeIngrediente(event.target.value)}} /> Patata
                             </Label>
                        </FormGroup>
                        <FormGroup check >
                            <Label check>
                                <Input type="checkbox" value="Chocolate" onChange={(event) => {añadeIngrediente(event.target.value)}} /> chocolate
                             </Label>
                        </FormGroup>
                        <FormGroup check >
                            <Label check>
                                <Input type="checkbox" value="Pasta" onChange={(event) => {añadeIngrediente(event.target.value)}} /> Pasta
                             </Label>
                        </FormGroup>
                        <FormGroup check >
                            <Label check>
                                <Input type="checkbox" value="Tomates" onChange={(event) => {añadeIngrediente(event.target.value)}} /> Tomates
                             </Label>
                        </FormGroup>
                    </Col>
                    <Col className="col-sm-12 col-md-6  offset-md-3  cuerpoRegistro text-center" >
                        <Button>Añadir</Button>
                    </Col>
                </Form>
            </Container>
        </>
    );
}
const TupperWithGeoloc = geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(SubirTupper);
export default TupperWithGeoloc;