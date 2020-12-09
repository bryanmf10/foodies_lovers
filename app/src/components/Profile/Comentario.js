import { Form, FormGroup, Input, Button } from "reactstrap";
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import styled from 'styled-components';
import Context from "../../context/Context";
import Star from "../Star";

const Contenedor = styled.div`
  width: 300px;
`;

const Formulario = styled.div`
  width: 600px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const Estrellas = styled.div`
  width: 100px;
`;

const Puntuar = styled.div`
  width: 100px;
`;

const Comentario = (props) => {
  const context = useContext(Context);
  const [redireccion, setRedireccion] = useState(false);
  const [name, setName] = useState("");

  const [puntuacion, setPuntuacion] = useState(['warning', 'Puntuar']);

  const handleNameChange = e => setName(e.target.value);
  const handleNameSubmit = e => {
    e.preventDefault();
    context.setName(name);
    setRedireccion(true);
  };

  return redireccion ? (<Redirect to="/perfil/opiniones" />) : (
    <Form onSubmit={handleNameSubmit}>
      <FormGroup>
        <Formulario>
          <Contenedor>
            <Input type="text" id="name" value={name} onChange={handleNameChange} placeholder="Introduce tu comentario" />
          </Contenedor>
          <Estrellas>
            <Star />
          </Estrellas>
          <Puntuar>
            <Button type="submit" value="Enviar" color={puntuacion[0]} onClick={() => setPuntuacion(['secondary', 'Puntuado'])}>{puntuacion[1]}</Button>{' '}
          </Puntuar>
        </Formulario>
      </FormGroup>
    </Form>
  );
};

export default Comentario;