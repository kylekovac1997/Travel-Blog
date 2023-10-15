import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import Login from "../pages/login/Login";

const StyledNavBarContainer = styled(Navbar)`
  background-color: #faf7f4;
  font-family: "Cinzel";
`;

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin-left: 70px;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5c5c5c;
    &:hover {
      color: #000000;
    }
    &:focus,
    &.active {
      color: #000000;
    }
  }
`;

const SocialMediaContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-left: 200px;
  width: 200px;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aca8a8;

    &:hover {
      color: #000000;
    }
    &:focus,
    &.active {
      color: #000000;
    }
  }
`;

export const NavigationBar = () => {
  return (
    <StyledNavBarContainer>
      <NavBarStyled>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/Blog">BLOG</NavLink>
        <NavLink to="/Destinations">DESTINATIONS</NavLink>
        <NavLink to="/About">ABOUT</NavLink>
        <NavLink to="/Contact">CONTACT</NavLink>
      </NavBarStyled>
      <SocialMediaContainer>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <Login />
      </SocialMediaContainer>
    </StyledNavBarContainer>
  );
};
