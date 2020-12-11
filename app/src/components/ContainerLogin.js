import { Col, Container, Row } from 'reactstrap';
import Login from "./Login";
import Registro from "./Registro";

const ContainerLogin = (props) => {


    return(
        <>
            <Container fluid>
                <Row>
                    <Col sm={4}>
                        <Registro onLogin={(value) => props.onLogin(value)} />
                    </Col>
                    <Col sm={4}>
                        <Login onLogin={(value) => props.onLogin(value)} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContainerLogin;