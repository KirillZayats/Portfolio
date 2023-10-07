import React, { useEffect, useState } from "react";
import {
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  ContainerPageStyle,
  SubTitleStyle,
  ContainerTitlePageStyle,
} from "../styles/AppStyled";
import {
  PhotoImageStyle,
  ContainerPhotoImageStyle,
  TextStyle,
  AboutMeStyle,
} from "../styles/aboutMe/AboutMeStyled";
import Skills from "../components/aboutMe/Skills";
import Contacts from "../components/contacts/Contacts";
import { styled } from "styled-components";
import FactsMe from "../components/aboutMe/FactsMe";
import { useSelector } from "react-redux";
import { TAboutMe } from "../additionally/interfaces";

const ContainerTextPageStyle = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const AboutMe: React.FC = () => {
  const { name, data } = useSelector((state: any) => state.language);
  const [dataAboutMe, setDataAboutMe] = useState<TAboutMe>();

  useEffect(() => {
    if (name) {
      name === "RU"
        ? setDataAboutMe(data["0"].Ru.aboutme)
        : setDataAboutMe(data["0"].En.aboutme);
    }
  }, [name]);
  return (
    <ContainerPageStyle>
      <ContainerTitlePageStyle>
        <TitleBlockStyle>
          <TitleStyle>
            <MarkedSymbolStyle>/</MarkedSymbolStyle>
            {dataAboutMe && dataAboutMe.title}
          </TitleStyle>
        </TitleBlockStyle>
        <SubTitleStyle>{dataAboutMe && dataAboutMe.subtitle}</SubTitleStyle>
      </ContainerTitlePageStyle>
      <AboutMeStyle>
        <ContainerPhotoImageStyle>
          <PhotoImageStyle />
        </ContainerPhotoImageStyle>
        <ContainerTextPageStyle>
          <TextStyle>
            {dataAboutMe &&
              dataAboutMe.descriptionMe.length > 0 &&
              dataAboutMe.descriptionMe[0]}
          </TextStyle>
          <TextStyle>
            {dataAboutMe &&
              dataAboutMe.descriptionMe.length > 0 &&
              dataAboutMe.descriptionMe[1]}
          </TextStyle>
          <TextStyle>
            {dataAboutMe &&
              dataAboutMe.descriptionMe.length > 0 &&
              dataAboutMe.descriptionMe[2]}{" "}
          </TextStyle>
        </ContainerTextPageStyle>
      </AboutMeStyle>
      <Skills />
      <FactsMe />
      <Contacts />
    </ContainerPageStyle>
  );
};

export default AboutMe;
