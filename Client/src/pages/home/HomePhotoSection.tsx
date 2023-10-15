import {
  CenterImage,
  LeftImage,
  PhotoSectionContainer,
  TextContainer,
} from "../../componets/styled_pages/home/HomePhtotoSectionStyles";

function HomePhotoSection() {
  return (
    <PhotoSectionContainer>
      <LeftImage></LeftImage>
      <CenterImage></CenterImage>

      <TextContainer>
        <h1>Welcome to</h1>
        <h3>TJ ABROAD</h3>
        <p>
          TJ, a solo female traveler, explores the world with zest. Her journeys
          inspire many, breaking barriers and embracing diverse cultures
          fearlessly.
        </p>
      </TextContainer>
    </PhotoSectionContainer>
  );
}

export default HomePhotoSection;
