import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: white;

  display: flex;
  flex-wrap: wrap;
  font-family: "Cinzel";
`;

const NavContainer = styled.nav`
  gap: 15px;
  margin-top: 40px;
  color: #868080;
  padding-left: 40px;
  border-right: 1px #c5afa44c solid;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  & a {
    margin-right: 20px;
  }
`;

const MiddleSection = styled.section`
  margin-left: 50px;
  font-family: "Oooh Baby";
  font-size: 25px;
  text-align: center;
  align-items: center;
  border-right: 1px #c5afa44c solid;
  & a {
    padding: 20px;
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

  & p,
  a {
    margin-top: 60px;
    padding-right: 30px;
  }
`;

const RightSection = styled.section`
  padding-top: 20px;
  text-align: center;
  padding-left: 60px;
  color: #aca8a8;

  & span {
    font-family: "Oooh Baby";
  }
  & div {
    background-size: contain;
    background-repeat: no-repeat;
    font-size: 25px;
    width: 300px;
    height: 300px;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzAeqmYmvr6TG_wipP0eNL_1dR71tcRNFXoGSsMjg&s");
  }

  & p {
    padding: 20px;
  }
`;

const BottomContainer = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMWG_o675jkmk_vhsqmSi_ULRtxneTp0Dkw&usqp=CAU");
  background-size: contain;
  height: 100px;
  display: flex;
  filter: brightness(50%);
  justify-content: center;
  align-items: center;
`;

function Footer() {
  return (
    <React.Fragment>
      <FooterContainer>
        <NavContainer>
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to="/Blog">BLOG</NavLink>
          <NavLink to="/Destinations">DESTINATIONS</NavLink>
          <NavLink to="/About">ABOUT</NavLink>
          <NavLink to="/Contact">CONTACT</NavLink>
        </NavContainer>

        <MiddleSection>
          <p>
            {" "}
            Follow us on Twitter and Facebook for <br />
            amazing travel adventures!
          </p>
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
        </MiddleSection>

        <RightSection>
          <div>
            <p>
              {" "}
              The go-to <br /> destination
              <br /> for <span>solo</span> and <br />
              <span>femal</span> travel
            </p>
          </div>
        </RightSection>
      </FooterContainer>{" "}
      <BottomContainer>
        {" "}
        Copyright &copy; 2023 The TJ Abroad | All Rights Reserved
      </BottomContainer>
    </React.Fragment>
  );
}

export default Footer;
