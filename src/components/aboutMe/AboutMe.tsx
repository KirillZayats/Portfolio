import React from "react";
import {
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  LineTitleStyle,
  ButtonStyle,
} from "../../styles/AppStyled";
import {
  PhotoImageStyle,
  ContainerInfoMeStyle,
  ContainerPhotoImageStyle,
  TextStyle,
  AboutMeStyle,
} from "../../styles/aboutMe/AboutMeStyled";

const AboutMe = () => {
  return (
    <AboutMeStyle>
      <ContainerInfoMeStyle>
        <TitleBlockStyle>
          <TitleStyle>
            <MarkedSymbolStyle>#</MarkedSymbolStyle>about me
          </TitleStyle>
          <LineTitleStyle />
        </TitleBlockStyle>
        <TextStyle>
          Hello, i’m Elias! I’m a self-taught front-end developer based in Kyiv,
          Ukraine. I can develop responsive websites from scratch and raise them
          into modern user-friendly web experiences. Transforming my creativity
          and knowledge into a websites has been my passion for over a year. I
          have been helping various clients to establish their presence online.
          I always strive to learn about the newest technologies and frameworks.
        </TextStyle>
        <ButtonStyle>{"Read more ->"}</ButtonStyle>
      </ContainerInfoMeStyle>
      <ContainerPhotoImageStyle>
        <PhotoImageStyle />
      </ContainerPhotoImageStyle>
    </AboutMeStyle>
  );
};

export default AboutMe;
