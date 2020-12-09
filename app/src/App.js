import React, { useState, useEffect } from "react";
import { MDBCol } from "mdbreact";

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,

} from "react-router-dom";
import { withCookies } from 'react-cookie';

import Tupper from "./components/Tupper";
import NotFound from "./components/P404";
import MisTuppers from "./components/Profile/MisTuppers";
import SolEntrantes from "./components/Profile/SolEntrantes";
import TuppersOfrecidos from "./components/Profile/TuppersOfrecidos";
import Trueques from "./components/Profile/Trueques";
import Opiniones from "./components/Profile/Opiniones";
import NewTupper from "./components/NewTupper";
import styled from "styled-components";
import Detalle from "./components/Detalle";
import Login from "./components/Login";

import ContenedorContexto from "./context/ContenedorContexto";

import Imagen from './components/Profile/images/images.jpg';

const FotoPerfilNav = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: inline-block;
  background-size: cover;
  background-position: center;
  background-image: url( ${props => props.imgSrc});
`;

const App = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    pruebaCookies();
  }, []);

  const pruebaCookies = () => {
    const { cookies } = props;
    if (cookies.get('prueba')) {
      console.log(cookies.get('prueba'));
    } else {
      cookies.set('prueba', "abcd");
      console.log(cookies.get('prueba'));
    }
  }

  return (
    <ContenedorContexto>
      <BrowserRouter>
        <Container fluid>
          <Navbar className="fixed-top" light expand="md" style={{ backgroundColor: '#EE5D6E' }}>
            <NavbarBrand href="/Tupper">TUPTOK</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar  >
                <NavLink to="/NewTupper" >
                  <i className="fa fa-plus-circle fa-2x" aria-hidden="true" style={{ color: " #E6F8F7" }} ></i>
                </NavLink>
              </Nav>
              <Nav className="ml-auto" navbar >
                <MDBCol md="-4">
                  <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </MDBCol>
                <UncontrolledDropdown nav className="text-left">
                  <DropdownToggle nav caret>  Usuario </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/perfil"> Mis tuppers </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem> Editar </DropdownItem>
                    <DropdownItem> Cerrar sesión  </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Tupper" component={Tupper} />
            <Route exact path="/NewTupper" component={NewTupper} />
            <Route exact path="/perfil" component={MisTuppers} />
            <Route exact path="/perfil/solEntrantes" component={SolEntrantes} />
            <Route exact path="/perfil/tuppersOfrecidos" component={TuppersOfrecidos} />
            <Route exact path="/perfil/trueques" component={Trueques} />
            <Route exact path="/perfil/opiniones" component={Opiniones} />
            <Route exact path="/detalle" component={Detalle} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ContenedorContexto>
  );
}
export default withCookies(App);