import React from "react";
import {
  CenterImage,
  LeftImage,
  PhotoSectionContainer,
  RightContainer,
  TextContainer,
} from "../../componets/styled_pages/home/HomePhtotoSectionStyles";

function HomePhotoSection() {
  return (
    <PhotoSectionContainer>
      <LeftImage
        src="https://www.asiapropertyawards.com/wp-content/uploads/2021/10/shutterstock_572193256.jpg"
        alt=""
      />
      <CenterImage src="https://img.etimg.com/thumb/msid-82350929,width-1200,height-900,imgsize-802386,resizemode-8,quality-100/magazines/panache/jet-set-getaways-super-rich-indians-charter-jets-to-destinations-like-turkey-bali-sri-lanka.jpg" />
      <RightContainer>
        <TextContainer>
          <h1>
            Welcome <span style={{ marginLeft: "-20px" }}>to</span>
          </h1>
          <h3>TJ ABROAD</h3>
          <p>
            TJ, a solo female traveler, explores the world with zest. Her
            journeys inspire many, breaking barriers and embracing diverse
            cultures fearlessly.
          </p>
        </TextContainer>
      </RightContainer>
    </PhotoSectionContainer>
  );
}

export default HomePhotoSection;
