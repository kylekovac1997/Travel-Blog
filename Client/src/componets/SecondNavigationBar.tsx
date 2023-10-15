import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavBarContainer = styled(Navbar)`
  font-family: "Cinzel";
  border-top: 1px grey ridge;
  border-bottom: 1px grey ridge;
  position: sticky;
  z-index: 2;
  background-color: white;
  top: -3px;
  /* margin-top: 30px; */
`;

const NavBarStyled = styled.nav`
  display: flex;
  position: sticky;
  justify-content: space-around;
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
    & img {
      width: 30px;
    }
  }
`;

export const SecondNavigationBar = () => {
  return (
    <StyledNavBarContainer>
      <NavBarStyled>
        <NavLink to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWjyhd1OlH81wsFZZHus-Jl0T4hwnzNNubQ&usqp=CAU"
            alt="Home-bottom img"
          />
        </NavLink>
        <NavLink to="/Type-of-trip">TYPE OF TRIP</NavLink>
        <NavLink to="/Life-style">LIFE STYLE</NavLink>
        <NavLink to="/Photography">PHOTOGRAPHY</NavLink>
        <NavLink to="/Travel-Essentials">Travel Essentials</NavLink>
      </NavBarStyled>
    </StyledNavBarContainer>
  );
};
