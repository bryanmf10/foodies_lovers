import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, NavItem } from "reactstrap";
import styled from 'styled-components';

import Description from "./Description";

const activeclassnamenav = 'nav-item-active'

const StyledNav = styled(Nav).attrs({ activeclassnamenav })`
  &.${activeclassnamenav} {
    height: 100px;
    display: flex;
    justifyContent: space-around;
    fontSize: 2em;
`;

const style = {
    textAlign: "center",
    fontFamily: "Londrina Solid",
    color:"#EE5D6E",
    fontSize:"20px"

}

const Perfil = () => {

  return (
    <>
      <Description />
        <Container className=" filtros mt-5">
          <StyledNav tabs className="justify-content-around" >
            <NavItem>
             <Link to="/perfil" style={style} className="nav-link" activeclassnamenavlink="nav-item-active">Mis Tuppers</Link>
            </NavItem>
            <NavItem>
              <Link to="/perfil/solEntrantes" style={style} className="nav-link" activeclassnamenavlink="nav-item-active">Solicitudes entrantes</Link>
            </NavItem>
            <NavItem>
              <Link to="/perfil/tuppersOfrecidos" style={style} className="nav-link" activeclassnamenavlink="nav-item-active">Tuppers ofrecidos</Link>
            </NavItem>
            <NavItem>
              <Link to="/perfil/trueques" style={style} className="nav-link" activeclassnamenavlink="nav-item-active">Trueques</Link>
            </NavItem>
            <NavItem>
              <Link to="/perfil/opiniones" style={style} className="nav-link" activeclassnamenavlink="nav-item-active">Opiniones</Link>
            </NavItem>
          </StyledNav>
        </Container>
    </>
  );
}

export default Perfil;