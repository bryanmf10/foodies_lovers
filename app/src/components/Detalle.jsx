import { Container, Row, Col, Button } from "reactstrap";
import React, { useState } from "react";
import styled from 'styled-components';
import imagen from './Profile/images/images.jpg';
import Modal from './ModalTupers';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Chip = styled.div`
    display: inline-block;
    padding: 0 25px;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    border-radius: 25px;
    background-color: #EE5D6E ;
    color: white;
`;



const Imagen = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    background-image: url(${props => props.imagSrc});
    background-size: cover;
    background-position: center;

`;

const FotoUser = styled.img`
    float: left;
    margin: 0 10px 0 -25px;
    height: 50px;
    width: 50px;
    border-radius: 50% ;
    border: solid 1px #EE5D6E;
`;

const Cabecera = styled.div`
   
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #E6F8F7;
`;
const TituloSubirTupper = styled.h2`
    font-size: 30px;
    text-align: center;
    font-family: Londrina Solid;
`;


const AnadirTupper = styled.h3`
  font-family: Londrina Solid;
  font-size: 20px;
  color:#EE5D6E;
  text-align: center;
`;
const Titulo = styled.h4`
font-size: 15px;
font-family: Londrina Solid;
`;
const Nombre = styled.h4`
font-size: 20px;
font-family: Londrina Solid ;
font-weight: bold;
`;
const Descripcion = styled.h4`
font-size: 17px;
font-family: Londrina Solid ;
`;
const Precio = styled.h4`
font-size: 17px;
font-family: Londrina Solid ;
`;
const Ingredientes = styled.p`
font-size: 17px;
font-family: Londrina Solid ;
margin:10px;
`;


export default () => {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
    }
    const styles = {
        wrapper: {
            height: 10,
            width: '75%',
            margin: '0 auto',
            display: 'flex'
        },
        map: {
            flex: 1
        }
    }

    const Mapa = () => {
        return (
            <MapContainer style={{ height: '70vh' }} center={[41.392264, 2.202652]} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap"</a> contributors'
                    url={'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'}
                    id="mapbox/light-v10"
                />
            </MapContainer>
        )
    }

    return (
        <Container fuid >
            <TituloSubirTupper><i class="fa fa-info-circle" aria-hidden="true"></i>
                          DETALLE TUPPER </TituloSubirTupper>
            <AnadirTupper>Todo sobre tu tupper </AnadirTupper>
            <Row className="justify-content-center">
                <Col md={10}>
                        <Row className="p-1"style={{ backgroundColor: "#E6F8F7", postition: "relative" }}>
                            <Chip>
                                <FotoUser src={imagen} width="96" height="96" />
                                <span>Julio Carpa Por Si Llueve</span>
                            </Chip>
                            <Button onClick={toggle} style={{ position: 'absolute', top: 0, right: "10px", backgroundColor: '#EE5D6E', border: "none", color: "#E6F8F7", fontFamily: "Londrina Solid", textAlign: "center", height: "50px" }}>Ofrecer tupper</Button>
                        </Row>

                        <Row>
                            <Col md={6} className="order-2 order-lg-1 mt-2">

                                <Row >

                                    <Col sm={6} >
                                        <Imagen imagSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRbSLn5hADjA9nhV-6E6akJEj8EcyuyQbvGg&usqp=CAU" ></Imagen>

                                    </Col>
                                    <Col md={6} style={{ backgroundColor: "#E6F8F7" }}>
                                        <Nombre>croquetas</Nombre>

                                        <Descripcion>croquetas de jamon hechas por mi abuela </Descripcion>

                                        <div>
                                            <i className="fas fa-circle"></i>
                                            <i className="fas fa-circle"></i>
                                            <i className="fas fa-circle"></i>
                                        </div>
                                        <Precio>3 TOK</Precio>
                                    </Col>

                        </Row>
                        <Row className="mt-2 " style={{ backgroundColor: "#E6F8F7", height: "240px" }}>
                                <Ingredientes>

                                    <Nombre>INGREDIENTES</Nombre>
                                    <ul>
                                        <li>limon</li>
                                        <li>lechuga</li>
                                        <li>tomate cherri</li>
                                    </ul>

                                </Ingredientes>
                        </Row>


                    </Col>
                        <Col md={6} className="order-1 order-lg-2 mt-2 mb-3">
                            <Mapa />
                        </Col>
                    </Row>
                    
                       
                    </Col>
                
            </Row>




                {modal && <Modal modal={modal} setModal={setModal} buttonLabel={'hola'} />}
        </Container >
    );
}