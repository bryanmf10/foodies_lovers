import React, { useState, useEffect, useContext } from "react";
import { MDBCol } from "mdbreact";

import {
  Container,
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from "reactstrap";

import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import { withCookies } from 'react-cookie';

import Tupper from "./components/Tupper";
import NotFound from "./components/P404";
import MisTuppers from "./components/Profile/MisTuppers";
import Editar from "./components/Profile/Editar";
import SolEntrantes from "./components/Profile/SolEntrantes";
import TuppersOfrecidos from "./components/Profile/TuppersOfrecidos";
import Trueques from "./components/Profile/Trueques";
import Opiniones from "./components/Profile/Opiniones";
import NewTupper from "./components/NewTupper";
import ModTupper from "./components/ModTuper";
import styled from "styled-components";
import Detalle from "./components/Detalle";
import Context from "./context/Context";
import imagen from './components/Profile/images/images.jpg';
import TokenController from "./controller/TokenController";
import ContainerLogin from "./components/ContainerLogin";
import Logout from "./components/Logout";

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

  const [authenticated, setAuthenticated] = useState(false);

  const context = useContext(Context);
  const { cookies } = props;
  useEffect(() => {
    authenticateToken();
  }, [authenticated]);

  const authenticateToken = () => {
    let token = cookies.get('token');
    if(token !== undefined && token !== null && token !== ""){
      TokenController.authenticateToken(token)
      .then(data => {
        if(data.ok !== false){
          context.setToken(token);
          setAuthenticated(true)
        }else{
          cookies.remove('token',false);
        }
      })
      .catch(error => console.log(error));
    }
  }

  const Inicio = () => {
    if(authenticated && context.token === cookies.get('token') ){
      return(
        <Container fluid>
          <Navbar className="fixed-top p-0 navbarBgColor" light expand="md">
            <Link to="/">
              <div className="ml-3 tuptok">  
                TUPTOK
              </div>
            </Link>
            <NavLink to="/NewTupper">
                <i className="fa fa-plus-circle fa-2x" aria-hidden="true" style={{ color: "#E6F8F7" }} ></i>
              </NavLink>
              <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar >
                <MDBCol className= "d-flex align-items-center">
                  <Input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </MDBCol>
                <UncontrolledDropdown nav className="text-left mr-1">
                  <DropdownToggle nav caret><FotoPerfilNav imgSrc={imagen}></FotoPerfilNav> </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem><Link to="/perfil">Mis tuppers</Link> </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem><Link to="/perfil/editar">Editar</Link> </DropdownItem>
                    <DropdownItem><Link to="/logout">Cerrar sesión</Link></DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <div style={{height:"80px"}}></div>
          <Switch>
            <Route exact path="/" component={Tupper} />
            <Route exact path="/NewTupper" component={NewTupper} />
            <Route exact path="/modTuper/:id" component={ModTupper} />
            <Route exact path="/perfil" component={MisTuppers} />
            <Route exact path="/perfil/editar" component={Editar} />
            <Route exact path="/perfil/solEntrantes" component={SolEntrantes} />
            <Route exact path="/perfil/tuppersOfrecidos" component={TuppersOfrecidos} />
            <Route exact path="/perfil/trueques" component={Trueques} />
            <Route exact path="/perfil/opiniones" component={Opiniones} />
            <Route exact path="/detalle/:id" component={Detalle} />
            <Route exact path="/logout" component={()=><Logout auth={()=>setAuthenticated(false)} />} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      )
    }else{
      return <ContainerLogin onLogin={(value) => setAuthenticated(value)} />
    }
  }

  return (
      <BrowserRouter>
        <Inicio />
      </BrowserRouter>
  );
}
export default withCookies(App);