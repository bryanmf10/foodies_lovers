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

const Usuario = styled.div`
    text-Align: right;
    margin: 5px; 
    font-Size: 13px;
    scroll-padding-block: 30px;
`;

const Divider = styled.div`
    border-left: 1px solid black;
`;

const Botones = styled.div`
    display: flex;
    justify-Content: space-around;
    margin-Bottom: 20px;
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
             <Foto imagSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkmQWnBItsHZQnSceNTIjUpk4PaH7NnUC8w&usqp=CAU"} /> 
            
            <Info>
                <Title>
                    {el.titulo}
                </Title>
                <Usuario >
                    <StarFixed valor={el.rating} />
                    <br />
                    <span>{el.usuario.email.split('@')[0]}</span>
                </Usuario>
                <Description>
                    {el.descripcion}
                </Description>
                <Botones>
                    <i class="fa fa-info fa-2x" aria-hidden="true"></i>
                    <Divider />
                    <i class="fa fa-heart-o fa-2x" aria-hidden="true" style={{ color: "#E43333" }}></i>
                </Botones>
            </Info>
        </Box>
    ));

    return (
        <Container fluid style={{ marginTop: "80px" }}>
            <Row>
                <Titulo>Quiero mi tupper:</Titulo>
            </Row>
            <Row className="filtros">
                <Col className="col-md-3 col-sm-12 col-12 text-center p-3" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Londrina Solid " }}>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret style={{ backgroundColor: '#EE5D6E', border: "none", color: "#E6F8F7" }}>
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
            <Row style={{ paddingTop: "30px" }} className="w-100">
                {tuppers}
            </Row>
        </Container >
    );
}

export default Tupper;