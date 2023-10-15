import { styled } from "styled-components";

export const PhotoSectionContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  background: url("https://png.pngtree.com/thumb_back/fh260/background/20220415/pngtree-softly-tinted-sunset-sky-in-hues-of-pink-orange-and-red-photo-image_21981222.jpg");
  width: 100%;
  height: 400px;
  background-size: cover;
  & > :nth-child(1) {
    align-self: flex-start;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
  & > :nth-child(2) {
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
  & > :nth-child(3) {
    right: 200px;
    @media only screen and (max-width: 600px) {
      right: 100px;
    }
  }
`;

export const LeftImage = styled.div`
  width: 400px;
  height: 400px;
  background-image: url("https://www.asiapropertyawards.com/wp-content/uploads/2021/10/shutterstock_572193256.jpg");
`;

export const CenterImage = styled.div`
  border: 10px #7e7b77ac solid;
  border-radius: 5px;
  width: 300px;
  height: 300px;
  z-index: 1;
  position: absolute;
  margin-left: 250px;
  margin-top: 50px;
  background-image: url("https://img.etimg.com/thumb/msid-82350929,width-1200,height-900,imgsize-802386,resizemode-8,quality-100/magazines/panache/jet-set-getaways-super-rich-indians-charter-jets-to-destinations-like-turkey-bali-sri-lanka.jpg");
  background-size: cover;
`;

export const TextContainer = styled.div`
  margin-top: 30px;
  max-width: 370px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 300px;
  justify-content: center;
  color: #7e7b77;
  position: absolute;
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
    @media only screen and (max-width: 600px) {
      margin: auto;
    }
  }
`;
