import React from "react";
import {
    Container, Row
} from "reactstrap";

import styled from "styled-components"


const Foto = styled.div`
    width: 300px;
    height: 300px;
    display: inline-block;
    background-image: url(${props => props.imagSrc});
    background-size: cover;
    background-position: center;

`;

const Box = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 100vw;
    max-height: 100vh;
    justify-content: center;
    align-items: center;`;

const Title = styled.div`
    margin-Top: 30px;
    font-Weight: bold; 
    font-Size: 20px;
    font-weight: bold;
`;

const Info = styled.div`
    font-family: Trispace, sans-serif;
    background-color: antiquewhite;
    width: 300px;
    text-align: center;
`;

const Description=styled.div`
    margin: 10px;
    font-Size: 13px; 
    text-align: justify;
    font-weight: bold;

`;

const Usuario=styled.div`
    text-Align: right;
    margin: 10px;
    margin:10px; 
    font-Size: 13px;
    scroll-padding-block:30px,

`;


const Tupper = () => {
    return (
        <Container fluid  style={{backgroundColor:"rgb(249,208,127,0.2)"}}>
            <Row style={{ paddingTop: "30px" }} className="w-100">
                <Box className=" col-12 col-sm-6 col-lg-4">
                    <Foto imagSrc="https://s1.eestatic.com/2019/04/21/cocinillas/actualidad-gastronomica/Actualidad_gastronomica_392722143_120971228_1280x1280.jpg">
                    </Foto>
                    <Info>
                        <Title >
                            CROQUETAS
                        </Title>
                        <Description>
                            croquetas de jamon hechas con mucho amor jsjjs jsjsjs sjjsjs sjsjjsjss nabsabjF JSDFLJSH FSDKFB LKJSDBLKJSD JSDHBF
                    </Description>
                        <Usuario >
                            Usuario
                        <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </Usuario>

                    </Info>
                </Box>
                <Box className=" col-12 col-sm-6 col-lg-4">
                    <Foto imagSrc="https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/recipe/5d5d03125bafe8dc49b479ab/ensalada-de-aguacates-int.jpg">
                    </Foto>
                    <Info>
                        <Title >
                            CROQUETAS
                        </Title>
                        <Description>
                            corquetas de jamon hechas con mucho amor jsjjs jsjsjs sjjsjs sjsjjsjss nabsabjF JSDFLJSH FSDKFB LKJSDBLKJSD JSDHBF
                    </Description>
                        <Usuario >
                            usuario
                        <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </Usuario>

                    </Info>
                </Box>
                <Box className=" col-12 col-sm-6 col-lg-4">
                    <Foto imagSrc="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/croquetas-de-pollo-y-jamon-1080x671.jpg">
                    </Foto>
                    <Info>
                        <Title >
                            CROQUETAS
                        </Title>
                        <Description>
                            corquetas de jamon hechas con mucho amor jsjjs jsjsjs sjjsjs sjsjjsjss nabsabjF JSDFLJSH FSDKFB LKJSDBLKJSD JSDHBF
                    </Description>
                        <Usuario >
                            usuario
                        <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </Usuario>

                    </Info>
                </Box>

            </Row>










        </Container >





    );




}

export default Tupper;