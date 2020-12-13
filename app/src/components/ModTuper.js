import { Container, Row, Input, FormGroup, Col, Form, Label, CustomInput, Button } from "reactstrap";
import React, { useState, useContext, useEffect } from "react";
import './NewTupper.css';
import { geolocated } from "react-geolocated";
import styled from 'styled-components';
import TupperController from '../controller/TuperController';
import Context from "../context/Context";
import TokenController from "../controller/TokenController";
import { Redirect } from "react-router-dom";
import TuperController from "../controller/TuperController";

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


const AnadirTupper=styled.h3`
  font-family: Londrina Solid;
  font-size: 20px;
  color:#EE5D6E;
  text-align: center;
`;



const ModTuper = (props) => {
    const [nom, setNom] = useState("");
    const [des, setDes] = useState("");
    const [ingredientes, setIngredientes] = useState([]);
    const [ingredientesDisplay, setIngredientesDisplay] = useState([]);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const [hasFrutosSecos, setHasFrutosSecos] = useState(false);
    const [hasLactosa, setHasLactosa] = useState(false);
    const [hasGluten, setHasGluten] = useState(false);
    const [valor, setValor] = useState("");
    const [selectedFile, setSelectedFile] = useState(false);
    const [urlFoto, setUrlFoto] = useState('');
    const [loading, setLoading] = useState(null);
    const context = useContext(Context);

    useEffect(()=> {
        let {id} = props.match.params;
        TuperController.getOne(id,context.token)
        .then(data => {
            console.log(data);
            let tuper = data.resp;
            setNom(tuper.titulo);
            setDes(tuper.descripcion);
            setVegan(tuper.vegan);
            setVegetarian(tuper.vegetarian);
            setHasFrutosSecos(tuper.hasFrutosSecos);
            setHasLactosa(tuper.hasLactosa);
            setHasGluten(tuper.hasGluten);
            setValor(tuper.valor_tamano);
            setUrlFoto(TuperController.getUrlFoto(tuper.urlFoto));
            setIngredientesDisplay(tuper.ingredientes.split(","));
            setIngredientes(tuper.ingredientes.split(","));
        })
        .catch(err => console.log(err))
    }, []);

    const handleImageChange = (event) => {
        let file = event.target.files[0];
        setSelectedFile(file);
        setUrlFoto(URL.createObjectURL(file));
    }

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
        
      }

    const añadeIngrediente = (ingr) => {
        let newArray = [...ingredientes];
        
        if (newArray.includes(ingr)) {
            let arrayIndex = newArray.indexOf(ingr);
            if (arrayIndex !== -1) newArray.splice(arrayIndex, 1);
        } else if (!newArray.includes(ingr)) {
            newArray.push(ingr);
        }
        setIngredientes(newArray);
      }
      
      if(loading){
          return <Redirect to="/" />;
      }

      const DisplayIngredientes = () => {
        return (ingredientesDisplay.length === 0 ? null : 
                ingredientesDisplay.map((el)=>{
                    return(
                        <FormGroup key={el+"-id"} check>
                            <Label check>
                                <Input type="checkbox" value={el} checked={ingredientes.includes(el)} onChange={(event) => { añadeIngrediente(event.target.value) }} /> {el}
                            </Label>
                        </FormGroup>
                    )
                })
            )
      }
      
    return (
        <>
            <Container fluid >
                <Form onSubmit={(event) => handleSubmit(event)} >
                     <TituloSubirTupper>MODIFICAR TUPPER</TituloSubirTupper>
                         <AnadirTupper>¿Qué te apetece subir hoy?
                         <FormGroup className="image-upload mt-1">
                                    <Label for="file-input">
                                       <i className="fa fa-camera-retro fa-2x" aria-hidden="true" ></i>
                                    </Label>
                                        <Input id="file-input" type="file"  name="customFile" onChange={(e) => handleImageChange(e)} />
                            </FormGroup>
                         </AnadirTupper>     
                    <Row className="justify-content-center ">
                        <Col sm={12} md={6}>
                            <Row className="cuerpoNewTupper"> </Row>
                            <Row className="mt-2 ">
                                <Col sm={6} >
                                    <Row className="justify-content-center">
                                        <Foto imagSrc={urlFoto}></Foto>
                                    </Row>
                                </Col>
                                <Col sm={6} className="fondoNewTupper ">
                                    <Row>
                                        <FormGroup className="col-12 textoNewTupper" >
                                            <Label for="inputName" >Nombre</Label>
                                            <Input type="text" name="text" id="inputName" placeholder="Introduce el nombre" value={nom} onChange={(event) => setNom(event.target.value)} required />
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup className="col-12 textoNewTupper">
                                            <Label for="exampleText"  >Descripción</Label>
                                            <Input className="input form-control" type="textarea" name="text" id="exampleText" placeholder="Datos relevantes del tupper" maxLength="100" value={des} onChange={(event) => setDes(event.target.value)} required />
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup className="precio textoNewTupper" required>
                                            <div>
                                                <CustomInput type="radio" id="tamano1" value="1" checked={valor === 1} onChange={(event) => setValor(event.target.value)} name="customRadio" label="1 TOK" inline/>
                                                <CustomInput type="radio" id="tamano2" value="2" checked={valor === 2} onChange={(event) => setValor(event.target.value)} name="customRadio" label="2 TOK" inline />
                                                <CustomInput type="radio" id="tamano3" value="3" checked={valor === 3} onChange={(event) => setValor(event.target.value)} name="customRadio" label="3 TOK" inline />
                                                <CustomInput type="radio" id="tamano0" value="0" checked={valor === 0} onChange={(event) => setValor(event.target.value)} name="customRadio" label="Solo acepto TUP" inline />
                                            </div>
                                        </FormGroup>
                                    </Row>
                                </Col>  
                            </Row>
                            <Row className="alergias">
                            <Col sm={6}></Col>
                            <Col sm={6}>
                                <FormGroup>
                                         <div>
                                                <CustomInput type="switch" id="vegano" checked={vegan} onChange={(event) => setVegan(event.target.checked)} name="customSwitch" label="Vegano" required />
                                                <CustomInput type="switch" id="vegetarian" checked={vegetarian} onChange={(event) => setVegetarian(event.target.checked)} name="customSwitch" label="Vegetariano" />
                                                <CustomInput type="switch" id="hasGluten" checked={hasGluten} onChange={(event) => setHasGluten(event.target.checked)} name="customSwitch" label=" Sin gluten" />
                                                <CustomInput type="switch" id="hasLactosa" checked={hasLactosa} onChange={(event) => setHasLactosa(event.target.checked)} name="customSwitch" label=" Sin lactosa" />
                                                <CustomInput type="switch" id="hasFrutosSecos" checked={hasFrutosSecos} onChange={(event) => setHasFrutosSecos(event.target.checked)} name="customSwitch" label=" Sin frutos secos" />
                                          </div>
                                 </FormGroup>
                                 </Col>
                            </Row>
                            <Row>
                            <Col className="fondoNewTupper">
                            <Label for="exampleText" sm={2} >Ingredientes</Label>
                            <DisplayIngredientes />
                                    <FormGroup >
                                      
                                            <Input type="text" name="text" id="inputingrediente" placeholder="Añade ingrediente"  />
                                            <Button  style={{ backgroundColor: '#EE5D6E', border: "none", color: "#E6F8F7", fontFamily: "Londrina Solid",  textAlign: "center"}}>Añadir</Button>
                                    </FormGroup>
                                </Col>      
                            </Row>
      
                            <Row className="justify-content-center">
                                    <Button  className="col-sm-12 col-md-4 text-center boton mt-2 " style={{ backgroundColor: '#EE5D6E', border: "none", color: "#E6F8F7", fontFamily: "Londrina Solid",  textAlign: "center"}}>Añadir</Button>
                            </Row>
                        </Col> 
                    </Row> 
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
})(ModTuper);
export default TupperWithGeoloc;