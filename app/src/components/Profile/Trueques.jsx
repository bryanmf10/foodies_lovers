import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import imagen from './images/images.jpg';
import StarRatingComponent from 'react-star-rating-component';

import Perfil from "./Perfil";

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
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  // justify-content: flex-end;
`;

const Opinion = styled.div`
  // border-radius: 25px;
  // width: 300px;
  // height: 50px;
  // display: flex;
  display: flex;
  justify-content: space-between;
  // justify-content: center;
  `;
  
  const Formulario = styled.div`
  width: 300px;
  margin-right: 10%;
  // display: flex;
  // justify-content: space-between;
`;
const Estrellas = styled.div`
  width: 200px;
  // display: flex;
  // justify-content: space-between;
  `;
  const Puntuar = styled.div`
  width: 200px;
  // display: flex;
  // justify-content: space-between;
`;
const Trueques = () => {

  const [puntuacion, setPuntuacion] = useState(['warning', 'Puntuar']);

  const [rating, setRating] = useState(1);
  const [rate, setRate] = useState(0);

  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  }

  useEffect(() => {
    setRate(rating);
  }, [rating])


  return (
    <>
    <Container>
      <Perfil/>
      <div>
      </div>
      <h2>Esto es el Trueques</h2>

      <Contenedor>
        <Chip>
          <Imagen src={imagen} width="96" height="96" />
          <span>Julio Carpa Por Si Llueve</span>
        </Chip>
        <Opinion>
          <Formulario>
            <Form>
              <FormGroup>
                <Input type="text" name="text" id="comentario" placeholder="Introduce tu comentario" />
              </FormGroup>
            </Form>
          </Formulario>
          <Estrellas>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rate}
              onStarClick={() => onStarClick(rate + 1, rate - 1)}
            />
          </Estrellas>
          <Puntuar>
            <Button color={puntuacion[0]} onClick={() => setPuntuacion(['secondary', 'Puntuado'])}>{puntuacion[1]}</Button>{' '}
          </Puntuar>
        </Opinion>
      </Contenedor>
      </Container>
    </>
  );
}

export default Trueques;

