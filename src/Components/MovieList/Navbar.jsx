import React from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: dodgerblue;
  position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #ff69b4;
  }
`;

function Navbar() {
  return (
    <div>
      <Container>
        <StyledLink to="/">
          <NavItem icon="fa-solid fa-house" name="HOME" />
        </StyledLink>
        <StyledLink to="/movie">
          <NavItem icon="fa-solid fa-video" name="MOVIE" />
        </StyledLink>
        <StyledLink to="/search">
          <NavItem icon="fa-solid fa-magnifying-glass" name="SEARCH" />
        </StyledLink>
        <StyledLink to="/mypage">
          <NavItem icon="fa-solid fa-circle-user" name="MYPAGE" />
        </StyledLink>
        <StyledLink to="/login">
          <NavItem icon="fa-solid fa-arrow-right-to-bracket" name="LOGIN" />
        </StyledLink>
      </Container>
    </div>
  );
}

export default Navbar;
