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
    background-color: black;
    color: white;
`;

const ContenedorImagen = styled.div`
    height: 50%;
    width: 100%;
`;

const Imagen = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
    border: 3px pink solid;
`;

const FotoUser = styled.img`
    float: left;
    margin: 0 10px 0 -25px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;
const Contenedor = styled.div`
    background-color: #E6F8F7;
    border-radius: 30px;
`;

const Cabecera = styled.div`
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
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
                <MapContainer style={{ height: '75vh' }} center={[41.392264, 2.202652]} zoom={10} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap"</a> contributors'
                        url={'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'}
                        id="mapbox/light-v10"
                    />
                </MapContainer>
          )
    }

    return (
        <Container >
            <div style={{ height: '50px' }}>
            </div>
            <br />
            <Contenedor>
                <Cabecera>
                    <Chip>
                        <FotoUser src={imagen} width="96" height="96" />
                        <span>Julio Carpa Por Si Llueve</span>
                    </Chip>
                    <Button onClick={toggle} style={{ backgroundColor: '#EE5D6E', border: 'none', borderRadius: "5px 20px 5px 5px", color: "#E6F8F7" }}>Ofrecer tupper</Button>
                </Cabecera>
                <Row>
                    <Col sm='12' lg='6' className="order-2 order-lg-1">
                        <div style={{ padding: '10px' }}>
                            <ContenedorImagen>
                                <Imagen src="https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59b648f65bafe80ec7221fab/tupperinterior.jpg" />
                            </ContenedorImagen>
                            <hr />
                            <div>
                                <h3>INTOLERANCIAS</h3>
                                <div>
                                    <i className="fas fa-circle"></i>
                                    <i className="fas fa-circle"></i>
                                    <i className="fas fa-circle"></i>
                                </div>
                                <h3>INGREDIENTES</h3>
                                <ul>
                                    <li>limon</li>
                                    <li>lechuga</li>
                                    <li>tomate cherri</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm='12' lg='6' className="order-1 order-lg-2">
                        <div style={{ padding: '10px' }}>
                            <ContenedorImagen >
                                <Mapa />
                            </ContenedorImagen>
                            <hr />
                            <div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quo, corrupti praesentium iure odit in veritatis incidunt aperiam atque ea at culpa hic nostrum sint reprehenderit optio sapiente impedit vero.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Contenedor>
            {modal && <Modal modal={modal} setModal={setModal} buttonLabel={'hola'} />}
        </Container>
    );
}