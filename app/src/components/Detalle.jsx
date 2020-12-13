import { Container, Row, Col, Button } from "reactstrap";
import React, { useEffect, useState, useContext } from "react";
import styled from 'styled-components';
import icono from './Profile/images/icono.png';
import imagen from './Profile/images/images.jpg';

import Modal from './ModalTupers';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import TuperController from "../controller/TuperController";
import Context from "../context/Context";
import PacmanLoader from "react-spinners/PacmanLoader"; 
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

export default (props) => {
    
    const [tuper, setTuper] = useState({});
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal)
    }
    const context = useContext(Context);

    const DefaultIcon = Leaflet.icon({
        iconUrl: icono,
        iconSize: [40, 40]
      });
    
    Leaflet.Marker.prototype.options.icon = DefaultIcon;

    useEffect(()=> {
        let { id } = props.match.params;
        TuperController.getOne(id,context.token)
        .then(data => {
            if(data.ok) {
                let tap = (data.resp);
                let obj = {
                    titulo: tap.titulo,
                    desc: tap.descripcion,
                    url: tap.urlFoto,
                    lat: tap.latitud,
                    lon: tap.longitud,
                    valor: tap.valor_tamano,
                    nombreUsuario: tap.usuario.email.split('@')[0],
                    fotoUsuario: tap.usuario.fotoURL,
                    ingredientes: tap.ingredientes.split(", ")
                }
                setTuper(obj);
            }
        })
        .then(() => setLoading(false))
        .catch(err => console.log(err));
    }, [])

    if(loading){
        return(
            <Container fluid className="mt-5 justify-content-center d-flex pt-5">
                <Col sm={9}>
                <PacmanLoader
                        size={75}
                        color={"#ff0080"}
                        />
                </Col>
            </Container>        
        );
    }
    
    const Mapa = () => {
        let posicion = [tuper.lat, tuper.lon];
        return (
                <MapContainer style={{ height: '75vh' }} center={posicion} zoom={16} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url={'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'}
                        id="mapbox/light-v10"
                    />
                    <Marker position={posicion}></Marker>                    
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
                        <FotoUser src={tuper.fotoUsuario !== null ? tuper.fotoUsuario : imagen} width="96" height="96" />
                        <span>{tuper.nombreUsuario}</span>
                    </Chip>
                    <Button onClick={toggle} style={{ backgroundColor: '#EE5D6E', border: 'none', borderRadius: "5px 20px 5px 5px", color: "#E6F8F7" }}>Ofrecer tupper</Button>
                </Cabecera>
                <Row>
                    <Col sm='12' lg='6' className="order-2 order-lg-1">
                        <div style={{ padding: '10px' }}>
                            <ContenedorImagen>
                                <Imagen src={TuperController.getUrlFoto(tuper.url)} />
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
                                {
                                    tuper.ingredientes.map((el) => {
                                        return <li key={el}>{el}</li>;
                                    })
                                }
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