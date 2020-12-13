import React, { useEffect, useState, useContext } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    FormGroup,
    Label,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    Input,
    CustomInput
} from "reactstrap";
import Context from "../context/Context";
import { Link } from "react-router-dom";

import styled from "styled-components";
import StarFixed from "./StarFixed";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TuperController from '../controller/TuperController';
import './NewTupper.css';

const Foto = styled.div`
    width: 90%;
    height: 200px;
    display: inline-block;
    background-image: url(${props => props.imagSrc});
    background-size: cover;
    background-position: center;
    border-radius:20px 20px 0 0;

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
    height: 40px;
    font-family: 'Londrina Solid', cursive;
`;

const Info = styled.div`
    font-family: Trispace, sans-serif;
    background-color: #E6F8F7;
    width: 90%;
    margin-bottom: 15px;
    border-radius: 0 0 20px 20px;
`;

const Description = styled.div`
    margin: 10px;
    font-Size: 13px; 
    text-align: justify;
    font-weight: bold;
    overflow: visible; 
    height: 80px;
    
`;

const Usuario = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-right: 5px; 
    font-Size: 13px;
 
`;

const Separador=styled.div`
height:5px;
background-color:white;
`;

const Divider = styled.div`
    border-left: 3px solid #EE5D6E;
`;

const Botones = styled.div`
    display: flex;
    justify-Content: space-around;
    margin-Bottom: 20px;
    margin-top:20px;
`;

const Titulo = styled.h2`
    font-Family: 'Londrina Solid', cursive;
`;

const Tupperparati = styled.h2`
    font-Family: 'Londrina Solid', cursive;
    margin-top: 20px;
    text-align: center;
`;

const Tupper = () => {
    const context = useContext(Context);
    const [listaTupers, setListaTupers] = useState([]);

    //Del Dropdown-----------------------
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    //------------------------------------

    useEffect(() => {
        TuperController.getAll(context.token)
            .then(data => {
                if (data.ok === false) {
                    setListaTupers([]);
                } else {
                    data.resp.map((el)=>{
                        el.urlFoto = TuperController.getUrlFoto(el.urlFoto);
                        return el;
                    })
                    setListaTupers(data.resp);
                }
            })
            .catch(err => console.log(err));

    }, []);
    //del Range-----------------------
    const useStyles = makeStyles({
        root: {
            width: 300,
        },
    });

    function valuetext(value) {
        return `${value}°C`;
    }

    const classes = useStyles();

    //------------------------------------
    const tuppers = listaTupers.length === 0 ? <p>No se han encontrado tupers</p> : listaTupers.map((el) => (
        <Box key={el.id} className="col-lg-3  col-sm-6 col-12">
             <Foto imagSrc={el.urlFoto} /> 
            <Info>
                <Title>
                    {el.titulo}
                </Title>
                <Usuario >
                    <span>{el.usuario.email.split('@')[0]}</span>
                    <StarFixed valor={el.rating} />
                </Usuario>
                <Description>
                    {el.descripcion}
                </Description>
               <Separador/>
                <Botones>
                    <Link to={"/detalle/"+el.id}>
                        <i class="fa fa-info-circle fa-2x" aria-hidden="true" style={{ color: "#EE5D6E" }}></i>
                    </Link>
                    <Divider />
                    <i class="fa fa-heart-o fa-2x" aria-hidden="true" style={{ color: "#EE5D6E" }}></i>
                </Botones>
            </Info>
        </Box>
    ));

    return (
        <Container fluid >
            <Row>
                <Titulo>Quiero mi tupper:</Titulo>
            </Row>
            <Row className="filtros">
                <Col className="col-md-3 col-sm-12 col-12 text-center p-3" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Londrina Solid " }}>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret style={{ backgroundColor: '#EE5D6E', border: "none", color: "#E6F8F7" ,borderRadius:"5px"}}>
                            Alimentación
                        </DropdownToggle>
                        <DropdownMenu className="p-2">
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                    Vegano
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                    Vegetariano
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                    Sin Frutos Secos
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                    Sin Lactosa
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="checkbox2" />{' '}
                                    Sin Gluten
                                </Label>
                            </FormGroup>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col className="col-md-3 col-sm-12 col-12 text-center" style={{ fontFamily: "Londrina Solid " }}>
                    <FormGroup>
                        <Label for="exampleCheckbox" />
                        <div>
                            <CustomInput type="radio" id="exampleCustomRadio1" name="customRadio" label="1 Tok" inline />
                            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="2 Tok" inline />
                            <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="3 Tok" inline />
                            <CustomInput type="radio" id="exampleCustomRadio4" name="customRadio" label="Solo acepto Tup" inline />
                        </div>
                    </FormGroup>
                </Col>
                <Col className="col-md-3 col-sm-12 col-12 d-flex align-items-center text-center "  >
                    <div className={classes.root}>
                        <Typography id="discrete-slider" gutterBottom>
                            Distancia
                         </Typography>
                        <Slider
                            defaultValue={30}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={10}
                            max={110}
                        />
                    </div>
                </Col>
                <Col className="col-md-3 col-sm-12 p-3 col-12 text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <Button className="boton" style={{ backgroundColor: '#EE5D6E', border: "none", color: "#E6F8F7", fontFamily: "Londrina Solid " }}>Go</Button>
                </Col>
            </Row>
            <Row>
                <Tupperparati>Tuppers para ti:</Tupperparati>
            </Row>
            <Row style={{ paddingTop: "10px" }} className="w-100">
                {tuppers}
            </Row>
        </Container >
    );
}

export default Tupper;