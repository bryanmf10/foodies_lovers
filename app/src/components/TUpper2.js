import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Container, Row, Input, FormText } from "reactstrap";

import styled from "styled-components"


const Foto = styled.div`
    width: 200px;
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
    font-Weight: bold; 
    font-Size: 20px;
    margin-left:10px;
`;

const Info = styled.div`
    font-family: Trispace, sans-serif;
    background-color: antiquewhite;
    width: 200px;
`;

const Description = styled.div`
    margin: 10px;
    font-Size: 13px; 
    text-align: justify;
    font-weight: bold;
    overflow:scroll; 
    height:80px;
`;

const Usuario = styled.div`
    text-Align: right;
    margin:5px; 
    font-Size: 13px;
    scroll-padding-block:30px,
`;

const Divider = styled.div`
    border-left: 1px solid black;
`;

const Botones = styled.div`
    display:flex;
    justify-Content:space-around;
    margin-Bottom:20px;
`;

const Tupper2 = () => {
    const [items, setItems] = useState([]);
    const [url, setUrl] = useState();
    const [titulo, setTitulo] = useState();
    const [descripcion, setDescripcion] = useState();
    const [lista, setLista] = useState();


    const guardar = () => {
        localStorage.setItem('mis_items', JSON.stringify(items));
    }

    const recuperar = () => {
        const itemsJson = localStorage.getItem('mis_items');
        const cosas = JSON.parse(itemsJson);
        if (cosas && cosas.length) {
            setLista(cosas);
        } else {
            setLista([]);
        }

    }

    const afegir = () => {
        if (url) {
            const nouItem = {
                imagen: url,
                id: uuid(),
                like: 0,
                titulo: titulo,
                descripcion: descripcion,
            };
            setItems([...items, nouItem]);
            setUrl('');
            setTitulo("");
            setDescripcion("");
        }
    }

    const tots = items.map((el) => (
        <Container fluid style={{ backgroundColor: "rgb(249,208,127,0.2)" }}>
            <Row style={{ paddingTop: "30px" }} className="w-100">
                <Box key={el.id} className=" col-12 col-sm-6 col-lg-4">
                    <Foto imagSrc={el.imagen}>
                    </Foto>
                    <Info>
                        <Title >
                            {el.titulo}
                        </Title>
                        <Usuario >
                            Usuario
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </Usuario>
                        <Description>
                            {el.descripcion}                    </Description>
                        <Botones>
                            <i class="fa fa-info fa-2x" aria-hidden="true"></i>
                            <Divider/>
                            <i class="fa fa-heart fa-2x" aria-hidden="true"></i>
                        </Botones>
                    </Info>
                </Box>
            </Row>
        </Container >
    ));

    return (
        <>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
          </FormText>
            <h3 style={{ fontFamily: "Trispace, sans-serif", fontSize: "15px", marginLeft: "29px", marginTop: "20px" }}>Introduce tus imagenes</h3>
            <div style={{ backgroundColor: "rgb(198, 223, 182)", marginLeft: "20px", marginTop: "20px", width: "210px", height: "100px", padding: "10px", borderRadius: "20px" }}>
                <input type="text" value={url} onChange={(ev) => setUrl(ev.target.value)} placeholder="Introduce la URL" />
                <br />
                <br />
                <input type="text" value={titulo} onChange={(ev) => setTitulo(ev.target.value)} placeholder="Introduce el titulo" />
                <br />
                <br />
                <input type="text" value={descripcion} onChange={(ev) => setDescripcion(ev.target.value)} placeholder="Introduce la descripción" />
            </div>
            <br />
            <div style={{ marginLeft: "20px", width: "300px", height: "100px", display: "inline-block" }}>
                <button onClick={afegir}>Afegir</button>
                <button onClick={guardar}>Guardar datos</button>
                <button onClick={recuperar}>Leer datos</button>
            </div>
            <br />
            <h3 style={{ fontFamily: "Trispace, sans-serif", fontSize: "25px", textAlign: "center", marginTop: "20px" }}>Las 10 fotos más divertidas del mundo animal</h3>
            <ul >
                {tots}
            </ul>
        </>
    );
}

export default Tupper2;