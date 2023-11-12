import React from "react";
import {
  CenterImage,
  LeftImage,
  PhotoSectionContainer,

} from "../../styled_pages/home/HomePhtotoSectionStyles";

function HomePhotoSection() {
  return (
    
    <PhotoSectionContainer>
   
      
        <h1>Welcome to <span>TJ ABROAD</span></h1>
        <p>
          TJ, a solo female traveler, explores the world with zest. Her journeys
          inspire many, breaking barriers and embracing diverse cultures
          fearlessly.
        </p>

      <img src={LeftImage}alt=""/>
      <img src={CenterImage}/>

    </PhotoSectionContainer>
  );
}

export default HomePhotoSection;
