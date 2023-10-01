import React from "react";
import {
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  LineTitleStyle,
  ContainerPageStyle,
  SubTitleStyle,
  ContainerTitlePageStyle,
  ContainerBlockColumnStyle,
} from "../styles/AppStyled";
import {
  PhotoImageStyle,
  ContainerInfoMeStyle,
  ContainerPhotoImageStyle,
  TextStyle,
  AboutMeStyle,
  ContainerTextStyle,
} from "../styles/aboutMe/AboutMeStyled";
import Skills from "../components/aboutMe/Skills";
import Contacts from "../components/contacts/Contacts";
import { styled } from "styled-components";
import FactsMe from "../components/aboutMe/FactsMe";

const ContainerTextPageStyle = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const AboutMe: React.FC = () => {
  return (
    <ContainerPageStyle>
      <ContainerTitlePageStyle>
        <TitleBlockStyle>
          <TitleStyle>
            <MarkedSymbolStyle>/</MarkedSymbolStyle>обо мне
          </TitleStyle>
        </TitleBlockStyle>
        <SubTitleStyle>Кто я?</SubTitleStyle>
      </ContainerTitlePageStyle>
        <AboutMeStyle>
          <ContainerPhotoImageStyle>
            <PhotoImageStyle />
          </ContainerPhotoImageStyle>
          <ContainerTextPageStyle>
            <TextStyle>
              Я front-end разработчик из Беларуси. По профессии
              Инженер-программист. Имею опыт больше года в разработке проектов
              малой и средней сложности. Я человек не конфликтный. Умею работать
              в команде и легко начинаю диалог.
            </TextStyle>
            <TextStyle>
              В ближайшее время планирую подтягивать свой английский язык до
              уровня B1-B2 и изучать новые технологии в сфере Front-end.
            </TextStyle>
            <TextStyle>
              Через 3-4 года вижу себя Middle разработчиком.
            </TextStyle>
          </ContainerTextPageStyle>
        </AboutMeStyle>
        <Skills/>
        <FactsMe/>
        <Contacts/>
    </ContainerPageStyle>
  );
};

export default AboutMe;
