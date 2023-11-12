import React, { useState } from "react";
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

 
  @media (max-width: 700px) {
    display: none; 
  }
`;
const DropDownDiv = styled.div`
display: none;
    @media only screen and (max-width: 700px){
  display: block;
  }
`
const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-left: 50px;
  padding: 20px;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #5c5c5c;
    margin-top: 10px;
    &:hover {
      background-color: #dbd4d4;
      border-radius: 15px;
      color: #000000;
    }
  }
  display: none;
    @media only screen and (max-width: 700px){

  display: block;

  }
`;

const SocialMediaContainer = styled.nav`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-left: 20px;
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = [
    { to: "/", text: "HOME" },
    { to: "/Blog", text: "BLOG" },
    { to: "/Destinations", text: "DESTINATIONS" },
    { to: "/About", text: "ABOUT" },
    { to: "/Contact", text: "CONTACT" },
  ];

 
  return (
    <StyledNavBarContainer>
      <NavBarStyled >
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/Blog">BLOG</NavLink>
        <NavLink to="/Destinations">DESTINATIONS</NavLink>
        <NavLink to="/About">ABOUT</NavLink>
        <NavLink to="/Contact">CONTACT</NavLink>
      </NavBarStyled>
      <DropDownDiv onClick={toggleDropdown}>Nav</DropDownDiv>
      {isDropdownOpen && (
        <DropdownContainer>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/Blog">BLOG</NavLink>
          <NavLink to="/Destinations">DESTINATIONS</NavLink>
          <NavLink to="/About">ABOUT</NavLink>
          <NavLink to="/Contact">CONTACT</NavLink>
        </DropdownContainer>
      )}
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
   <Login/>
      </SocialMediaContainer> 


    </StyledNavBarContainer>
  );
};

