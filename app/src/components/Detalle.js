import react from 'react'; 
import {Container,Row,Col} from 'reactstrap';
import styled from "styled-components";


const Caja=styled.div`
widht:100%;
height:400px;
border:1px solid black;
`
;


export default()=>{

    return(
        <Container>
            <Row>
                <Caja className="col-lg-6 col-sm-12 col-12">
                
                <h3>Aqui irá la foto deltupper</h3>
                </Caja>
                <Caja className="col-lg-6 col-sm-12 col-12">
                <h3> Aqui irá el mapa</h3>
                </Caja>
            </Row>
        </Container>

    );
}