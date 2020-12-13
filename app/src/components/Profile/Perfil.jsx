import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import styled from 'styled-components';

import Description from "./Description";

const activeclassnamenavlink = 'nav-item-active'
const activeclassnamenav = 'nav-item-active'


const StyledNav = styled(Nav).attrs({ activeclassnamenav })`
  &.${activeclassnamenav} {
    height: 100px;
    display: flex;
    justifyContent: space-around;
    fontSize: 2em;
`;

const StyledLink = styled(NavLink).attrs({ activeclassnamenavlink })`
  &.${activeclassnamenavlink} {
    width: 300px;
    textAlign: center;
    fontFamily: Bahnschrift, Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif;
  }
`;

const Perfil = () => {

  return (
    <>
      <br/>
      <br/>
      <br/>
      <Description />
      <br/>
        <Container>
          <StyledNav tabs>
            <NavItem>
              <StyledLink><Link to="/perfil">Mis Tuppers</Link></StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink><Link to="/perfil/solEntrantes">Solicitudes entrantes</Link></StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink><Link to="/perfil/tuppersOfrecidos">Tuppers ofrecidos</Link></StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink><Link to="/perfil/trueques">Trueques</Link></StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink><Link to="/perfil/opiniones">Opiniones</Link></StyledLink>
            </NavItem>
          </StyledNav>
        </Container>
    </>
  );
}

export default Perfil;