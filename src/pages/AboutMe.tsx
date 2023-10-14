import React, { useEffect, useState } from "react";
import {
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  ContainerPageStyle,
  SubTitleStyle,
  ContainerTitlePageStyle,
  ContainerProvider,
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
import { TAboutMe } from "../additionally/interfaces";
import Footer from "../components/footer/Footer";
import { userTypeSelector } from "../store/hooks/userTypeSelector";

const ContainerTextPageStyle = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const AboutMe: React.FC = () => {
  const { name, data } = userTypeSelector((state: any) => state.language);
  const [dataAboutMe, setDataAboutMe] = useState<TAboutMe>();

  useEffect(() => {
    if (name) {
      name === "RU"
        ? setDataAboutMe(data["0"].Ru.aboutme)
        : setDataAboutMe(data["0"].En.aboutme);
    }
  }, [name]);
  return (
    <ContainerProvider>
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
            <PhotoImageStyle className="my-photo" src={dataAboutMe && dataAboutMe.my_photo} alt="my photo" title="my photo"/>
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
          </ContainerTextPageStyle>
        </AboutMeStyle>
        <Skills />
        <FactsMe />
        <Contacts />
      </ContainerPageStyle>
      <Footer />
    </ContainerProvider>
  );
};

export default AboutMe;
