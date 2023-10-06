import { styled } from "styled-components";

export const PhotoSectionContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

export const LeftImage = styled.img`
  width: 400px;
  height: 400px;
`;

export const CenterImage = styled.img`
  border: 10px #7e7b776e solid;
  border-radius: 5px;
  width: 300px;
  height: 300px;
  z-index: 1;
  position: absolute;
  margin-left: 250px;
  margin-top: 50px;
`;

export const RightContainer = styled.div`
  width: 100%;
  background: url("https://png.pngtree.com/thumb_back/fh260/background/20220415/pngtree-softly-tinted-sunset-sky-in-hues-of-pink-orange-and-red-photo-image_21981222.jpg");
  background-size: cover;
`;

export const TextContainer = styled.div`
  margin: auto;
  margin-top: 30px;
  max-width: 370px;
  text-align: center;
  color: #7e7b77;

  & h1 {
    font-family: "Marck Script";
    transform: rotate(-10deg);
    font-size: 70px;
  }

  & h3 {
    font-family: "Cinzel";
    font-size: 30px;
  }

  & p {
    margin-top: 50px;
  }
`;
