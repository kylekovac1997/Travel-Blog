import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavBarContainer = styled(Navbar)`
  display: flex;
  justify-content: center;
`;

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 900px;
  & a {
    width: 150px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5c5c5c;
    border: 2px solid #5c5c5c;
    border-radius: 4px;
    &:hover {
      color: #000000;
      border-color: black;
    }
    &:focus,
    &.active {
      color: #000000;
      border-color: black;
    }
  }
`;

export const NavigationBar = () => {
  return (
    <StyledNavBarContainer>
      <NavBarStyled>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink to="/Destinations">Destinations</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Travel-Essentials">Travel Essentials</NavLink>
      </NavBarStyled>
    </StyledNavBarContainer>
  );
};
