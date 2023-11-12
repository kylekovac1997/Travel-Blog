import { styled } from "styled-components";

export const PhotoSectionContainer = styled.div`
  background: url("https://png.pngtree.com/thumb_back/fh260/background/20220415/pngtree-softly-tinted-sunset-sky-in-hues-of-pink-orange-and-red-photo-image_21981222.jpg");
  max-width: 1200px;
  width: 100%;
  height: 400px;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  color: #7e7b77;
  //H1
  & :nth-child(1){
   
    display: flex;
    flex-wrap: wrap;
    width: 260px;
    font-size: 60px;
    font-family: "Marck Script";
    margin: auto;
    margin-top: 2px;
    & span{
      font-family: "Cinzel";
      font-size: 30px;
      transform: rotate(-5deg);
      margin-top: -20px;
      margin-left: 30px;
    }
  
  } 
  //TextSection
   & :nth-child(2){
   
    margin:10px;
  font-family: "Cinzel";
  }
  //LeftImage
  & :nth-child(3) {
    bottom: 0;
    position: relative;
    width: 125px;
    margin: 10px;
    border-radius: 15px;
  }
  //CenterImage
  & :nth-child(4) {
    bottom: 0;
    right: 0;
    position: relative;
    width: 125px;
    margin: 10px;
    border-radius: 15px;
  }
 
       
  @media  only screen and (min-width: 481px) and (max-width: 767px) {
  //LeftImage
  & :nth-child(3) {
 width: 200px;
 margin: auto;
  }
  //CenterImage
  & :nth-child(4) {
    width: 250px;
    margin: auto;
  }
  }


  @media only screen and (min-width: 768px) and (max-width: 1024px) {
 //H1
 & :nth-child(1){
    margin-right: -285px;
    margin-top: 20px;


  } 
   //TextSection
  & :nth-child(2){
  width: 300px;
  margin-top: 150px;
  margin-right: 50px;
  }
   //LeftImage
  & :nth-child(3) {
    position: absolute;
    border-radius: 0;
    height: 100%;
    width: 50%;
    margin: 0;
    margin-right: 210px;
  }
  //CenterImage
  & :nth-child(4) {
   display: none;
  }

  }
 

  
  @media only screen and (min-width: 1025px) {
  //H1
  & :nth-child(1){
    margin-right: -285px;
    margin-top: 20px;


  } 
   //TextSection
  & :nth-child(2){
  width: 300px;
  margin-top: 150px;
  margin-right: 50px;


  }
   //LeftImage
  & :nth-child(3) {
    position: absolute;
    border-radius: 0;
    height: 100%;
    width: 50%;
    margin: 0;
    margin-right: 210px;
  }
  //CenterImage
  & :nth-child(4) {
   position: absolute;
    border-radius: 0;
    height: 230px;
    width: 300px;
    border: white 5px solid;
    margin: 0;
    left: 36%;
    top: 80px;
  }
  }
`

export const LeftImage = "https://img.etimg.com/thumb/msid-82350929,width-1200,height-900,imgsize-802386,resizemode-8,quality-100/magazines/panache/jet-set-getaways-super-rich-indians-charter-jets-to-destinations-like-turkey-bali-sri-lanka.jpg";



export const CenterImage = "https://www.asiapropertyawards.com/wp-content/uploads/2021/10/shutterstock_572193256.jpg";
 






