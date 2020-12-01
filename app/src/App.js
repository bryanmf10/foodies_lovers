import React, { useState } from "react";
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
  DropdownItem,

} from "reactstrap";

import {
  BrowserRouter
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Tupper from "./components/Tupper";



const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <BrowserRouter>
      <Container fluid>
        <Navbar color="rgb(255,204,153,0.5)" light expand="md">
          <NavbarBrand href="/">TUPTOK</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar  >
              <i className="fa fa-plus-circle fa-2x" aria-hidden="true" ></i>
            </Nav>

            <Nav className="ml-auto" navbar >
              <MDBCol md="-4">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
              </MDBCol>

              <UncontrolledDropdown nav inNavbar className="text-left">
                <DropdownToggle nav caret>  Usuario </DropdownToggle>
                <DropdownMenu >

                  <DropdownItem> Ofertas </DropdownItem>
                  <DropdownItem> Mis tuppers </DropdownItem>
                  <DropdownItem> Credito </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem> Editar </DropdownItem>
                  <DropdownItem> Cerrar sesión  </DropdownItem>


                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>

          </Collapse>
        </Navbar>
        <Tupper />
      </Container>
    </BrowserRouter>
  );

}
export default App;