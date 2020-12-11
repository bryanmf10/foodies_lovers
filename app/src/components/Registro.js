import React from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './NewTupper.css';
import styled from "styled-components";

const Tuptok = styled.h2`
    font-size: 30px;
    text-align: center;
    font-family: Londrina Solid;
    margin-top:60px;

`;

const Registro = () => {
    return (
        <Form>
            <Tuptok>TUPTOK</Tuptok>
            <FormGroup className="col-sm-12 col-md-4  offset-md-4 cuerpoRegistro" >
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Introduce tu email" />
            </FormGroup>
            <FormGroup className="col-sm-12 col-md-4  offset-md-4 cuerpoRegistro" >
                <Label for="examplePassword" styled={{ marginTop: "10px" }}>Contraseña</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="introduce tu contraseña" />
            </FormGroup>
            <FormGroup className="col-sm-12 col-md-4  offset-md-4 cuerpoRegistro" >
                <Label for="telefono" styled={{ marginTop: "10px" }}>Telefono</Label>
                <Input type="tel" name="tel" id="telefono" placeholder="introduce tu numero de telefono" />
            </FormGroup>
            <button type="submit" class="col-sm-12 col-md-4  offset-md-4  text-center boton ">Submit</button>
        </Form>
    );
}

export default Registro;