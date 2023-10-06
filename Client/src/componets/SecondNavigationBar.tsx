import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavBarContainer = styled(Navbar)`
  font-family: "Cinzel";
  border-top: 1px grey ridge;
  border-bottom: 1px grey ridge;
  /* margin-top: 30px; */
`;

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-left: 70px;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5c5c5c;
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

export const SecondNavigationBar = () => {
  return (
    <StyledNavBarContainer>
      <NavBarStyled>
        <NavLink to="/Type-of-trip">TYPE OF TRIP</NavLink>
        <NavLink to="/Life-style">LIFE STYLE</NavLink>
        <NavLink to="/Photography">PHOTOGRAPHY</NavLink>
        <NavLink to="/Travel-Essentials">Travel Essentials</NavLink>
      </NavBarStyled>
    </StyledNavBarContainer>
  );
};
