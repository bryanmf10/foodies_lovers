import { Container, Row, Col, Button } from "reactstrap";
import React from "react";
import styled from 'styled-components';
import imagen from './Profile/images/images.jpg';



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

const Imagen = styled.img`
  float: left;
  margin: 0 10px 0 -25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
const Contenedor = styled.div`
  border: 2px solid #ccc;
  background-color: #eee;

`;
const Cabecera = styled.div`
  border: 2px solid #ccc;
  background-color: #eee;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;



export default () => {

    return (
        <Container>

            <div style={{ height: "50px" }}>
            </div>
            <br />
            <Contenedor>
                <Cabecera>
                    <Chip>
                        <Imagen src={imagen} width="96" height="96" />
                        <span>Julio Carpa Por Si Llueve</span>
                    </Chip>
                    <Button style={{ backgroundColor: '#EE5D6E', border: "none", color: "#E6F8F7" }}>Ofrecer tupper</Button>
                </Cabecera>
                <Row>
                    <Col sm='12' lg='6' className="order-2 order-lg-1">
                        <div style={{ border: "1px solid black" }}>
                            <img src="https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59b648f65bafe80ec7221fab/tupperinterior.jpg" style={{ width: "300px" }} />
                        </div>
                        <hr/>
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
                    </Col>
                    <Col sm='12' lg='6' className="order-1 order-lg-2">
                        <div style={{ border: "1px solid black" }}>
                            <img src="https://i.blogs.es/b4dd5c/maps/1366_2000.png" style={{ width: "300px" }} />
                        </div>
                        <hr/>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quo, corrupti praesentium iure odit in veritatis incidunt aperiam atque ea at culpa hic nostrum sint reprehenderit optio sapiente impedit vero.</p>
                        </div>
                    </Col>
                </Row>
            </Contenedor>
        </Container>
    );
}