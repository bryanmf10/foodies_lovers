import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './NewTupper.css';
import styled from "styled-components";
import AccountController from '../controller/AccountController';

const Tuptok = styled.h2`
    font-size: 30px;
    text-align: center;
    font-family: Londrina Solid;
    margin-top:60px;
`;

const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        AccountController.loginUser(email, password)
            .then(data => saveCookie(data))
            .catch(error => console.log(error));
    }

    const saveCookie = (token) => {
        const { cookies } = props;  
        cookies.set('token', token);   
    }

    return (
        <Form onSubmit={(event) => handleSubmit(event)}>
            <Tuptok>TUPTOK</Tuptok>
            <FormGroup className="col-sm-12 col-md-4  offset-md-4 cuerpoRegistro" >
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Introduce tu email" value={email} onChange={(event) => setEmail(event.target.value)} />

                <Label for="examplePassword" styled={{ marginTop: "10px" }}>Contraseña</Label>
                <Input type="password" name="password" id="password" placeholder="introduce tu contraseña" value={password} onChange={(event) => setPassword(event.target.value)} />
            </FormGroup>
            <button type="submit" class="col-sm-12 col-md-4  offset-md-4  text-center boton ">Submit</button>
        </Form>




    );
}

export default Login;