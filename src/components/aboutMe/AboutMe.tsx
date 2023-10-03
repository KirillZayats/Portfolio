import React from "react";
import {
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  LineTitleStyle,
  ButtonStyle,
  LinkStyle,
} from "../../styles/AppStyled";
import {
  PhotoImageStyle,
  ContainerInfoMeStyle,
  ContainerPhotoImageStyle,
  TextStyle,
  AboutMeStyle,
  ContainerTextStyle,
} from "../../styles/aboutMe/AboutMeStyled";

const AboutMe = () => {
  return (
    <AboutMeStyle>
      <ContainerInfoMeStyle>
        <TitleBlockStyle>
          <TitleStyle>
            <MarkedSymbolStyle>#</MarkedSymbolStyle>обо мне
          </TitleStyle>
          <LineTitleStyle />
        </TitleBlockStyle>
        <ContainerTextStyle>
          <TextStyle>
            Я front-end разработчик из Беларуси. По профессии
            Инженер-программист. Имею опыт больше двух лет в разработке
            проектов малой и средней сложности. Я человек не конфликтный. Умею
            работать в команде и легко начинаю диалог.
          </TextStyle>
          <TextStyle>
            В ближайшее время планирую подтягивать свой английский язык до
            уровня B1-B2 и изучать новые технологии в сфере Front-end.
          </TextStyle>
          <TextStyle>Через 4-5 лет вижу себя Senior разработчиком.</TextStyle>
        </ContainerTextStyle>
        <LinkStyle to={'/aboutme'}>
        <ButtonStyle>{"Узнать больше"}</ButtonStyle>
        </LinkStyle>
      </ContainerInfoMeStyle>
      <ContainerPhotoImageStyle>
        <PhotoImageStyle />
      </ContainerPhotoImageStyle>
    </AboutMeStyle>
  );
};

export default AboutMe;
