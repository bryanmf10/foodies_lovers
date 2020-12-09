import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import styled from 'styled-components';

import Description from "./Description";

const activeClassNameNavLink = 'nav-item-active'
const activeClassNameNav = 'nav-item-active'


const StyledNav = styled(Nav).attrs({ activeClassNameNav })`
  &.${activeClassNameNav} {
    height: 100px;
    display: flex;
    justifyContent: space-around;
    fontSize: 2em;
`;

const StyledLink = styled(NavLink).attrs({ activeClassNameNavLink })`
  &.${activeClassNameNavLink} {
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
      <BrowserRouter>
        <Container>
          <StyledNav tabs>
            <NavItem>
              <StyledLink href="/perfil">Mis Tuppers</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink href="/perfil/solEntrantes">Solicitudes entrantes</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink href="/perfil/tuppersOfrecidos">Tuppers ofrecidos</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink href="/perfil/trueques">Trueques</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink href="/perfil/opiniones">Opiniones</StyledLink>
            </NavItem>
          </StyledNav>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default Perfil;