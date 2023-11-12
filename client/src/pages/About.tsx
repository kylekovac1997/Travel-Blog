import React from "react";
import {
  AboutPageContainer,
  TopContainer,
  TopContextHeader,
  TopContext,
  TopImage,
  FirstSection,
  SecondSection,
  HeaderAboutPage,
  WorldGlobeAboutPage,
} from "../styled_pages/about/AboutStyles";
import { FirstSection_FirstImage, FirstSection_FourthImage, FirstSection_SecondImage, FirstSection_ThirdImage, SecondSection_FirstImage, SecondSection_FourthImage, SecondSection_SecondImage, SecondSection_ThirdImage } from "../styled_pages/about/AboutImages";
function About() {
  return (
    <React.Fragment>
      <TopContainer>
        <TopImage src="https://c4.wallpaperflare.com/wallpaper/798/301/306/warm-sky-clouds-sun-sunset-wallpaper-preview.jpg" />
        <TopContext>
          <TopContextHeader>
            <p>ABOUT</p>
          </TopContextHeader>

          <p>
            The Blonde Abroad is the go-to website for solo and female travel
            around the world—for all women, by women.
          </p>
        </TopContext>
      </TopContainer>
      <AboutPageContainer>
        <FirstSection>
          <HeaderAboutPage>
            MEET THE <br />
            <span>TJ</span>
            <br />
            <span>ABROAD</span>
          </HeaderAboutPage>
          <p>
            Hello! I'm Tijana, a globe-trotter hailing from the vibrant city of
            Melbourne, Australia. Surrounded by the dynamic mix of Melbourne’s
            art-laden streets, its bustling laneway cafes, and its passion for
            sports, I grew up with an insatiable curiosity and zest for life.
            <img
              src= {FirstSection_FirstImage}
              alt="FirstSection_FirstImage"
            />
          </p>
          <img
            src= {FirstSection_SecondImage}
            alt="FirstSection_ThirdImage"
          />
          <img
            src= {FirstSection_ThirdImage}
            alt="aboutPage-first-section-third-img"
          />{" "}
          <img
            src= {FirstSection_FourthImage}
            alt="FirstSection_FourthImage"
          />{" "}
          <p>
            Ever since I was a young girl, the allure of the unfamiliar has
            always enchanted me. Maybe it’s because Melbourne itself is such a
            melting pot of cultures. I remember hearing stories from my
            grandparents about the world beyond our city, and I always dreamt of
            tracing their footsteps, and creating some paths of my own.
          </p>
        </FirstSection>
        <br /> 
        <SecondSection>
        
          
          <p>
            Each destination has left an indelible mark on me, teaching me about
            the beauty of our world, the richness of our cultures, and the
            universality of human connection. But it's not just about the
            destinations. For me, travel is as much about the journey as it is
            about the destination. It's about the new friendships forged, the
            culinary delights tasted, the music that made me dance, and the
            countless sunsets and sunrises that have taken my breath away.
          </p>  <img src={SecondSection_FirstImage} alt="SecondSection_FirstImage"/>
          <WorldGlobeAboutPage/>
          <p>   When I'm not traveling, I love to spend my time in Melbourne, soaking
          in the city's vibrant arts scene, sipping on a flat white in one of
          its many hidden cafes, and enjoying picnics by the Yarra River. I also
          have a passion for photography and writing. Through these mediums, I
          hope to share my experiences, stories, and insights from my travels,
          hoping to inspire others to embark on their own adventures.</p>
          <img src={SecondSection_SecondImage} alt="SecondSection_SecondImage"/>
          <p> Join me as I share tales from my journeys, tips for fellow travelers,
          and snapshots of the beauty our world has to offer. Whether you're a
          seasoned traveler or someone who dreams of exploring the world, I hope
          my stories resonate with you and encourage you to chase your own
          horizons. Happy travels! Tijana 🌍🌸📸</p>
          <img src={SecondSection_ThirdImage} alt="SecondSection_ThirdImage"/>
          <img src={SecondSection_FourthImage} alt="SecondSection_FourthImage"/>
        </SecondSection>
       
      </AboutPageContainer>
   
    </React.Fragment>
  );
}

export default About;
