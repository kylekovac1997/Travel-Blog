import { styled } from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopImage = styled.img`
  max-width: 1400px;
  width: 100%;
  max-height: 600px;
`;

export const TopContextHeader = styled.div`
  background-image: url("data:image/jpeg;base64,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");
  background-size: contain;
  position: absolute;
  top: -10px;
  left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  height: 100px;
  max-width: 100px;
  width: 100%;
  & p {
    font-size: 20px;
    margin-top: -15px;
    color: grey;
    font-weight: 800;
  }
`;

export const TopContext = styled.section`
  border: 1px solid white;
  max-width: 300px;
  width: 100%;
  height: 200px;
  background-color: white;
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  color: #aca8a8;
  font-family: "Cinzel";
  &::before {
    content: "";
    background-color: transparent;
    border: 1px solid #e9cbb9;
    display: block;
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
  }

  & :nth-child(2) {
    margin-top: 60px;
    width: 250px;
    margin-left: 24px;
  }
`;
export const AboutPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: auto;
  margin-top: 70px;
  max-width: 800px;
`;

export const FirstSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  text-align: start;
  background-color: #c2a8a021;
  color: #7a7575;
  & p {
    max-width: 600px;
    display: flex;
    margin-bottom: 20px;
    font-size: 14px;
    text-align: center;
    padding: 20px;

    & img {
      position: relative;
      right: -100px;
      margin-top: -170px;
      border: 5px solid white;
      width: 300px;
      height: 400px;
    }
  }
  img:nth-child(3) {
    margin-top: -100px;
    border: 5px solid white;
    border-radius: 5px;
    margin-bottom: 25px;
    height: 200px;
    margin-left: 50px;
  }
  img:nth-child(4) {
    margin-top: -70px;
    border: 5px solid white;
    border-radius: 5px;
    position: relative;
    margin-left: -40px;
    margin-bottom: 15px;
    height: 200px;
  }
  img:nth-child(5) {
    margin-top: -50px;
    border: 5px solid white;
    border-radius: 5px;
    position: relative;
    margin-bottom: 15px;
    margin-left: 20px;
    height: 200px;
  }
  :nth-child(6) {
    width: 200px;
    border-radius: 5px;
    position: relative;
    margin-top: -170px;
    margin-left: 90px;
  }
`;

export const HeaderAboutPage = styled.h1`
  font-family: "Cinzel";
  margin: 20px;
  border: 5px solid white;
  margin-bottom: 100px;
  text-align: center;
  span:nth-child(2) {
    position: absolute;
    font-family: "Oooh Baby";
    font-size: 70px;
    margin-left: -30px;
    transform: rotate(-20deg);
  }
  span:nth-child(4) {
    position: relative;
    left: 90px;
    bottom: -30px;
    border: 5px solid white;
  }
`;

export const SecondSection = styled.section`
  border: blue 1px solid;
`;

export const ThirdSection = styled.section`
  border: blue 1px solid;
`;

export const FourthSection = styled.section`
  border: blue 1px solid;
`;
