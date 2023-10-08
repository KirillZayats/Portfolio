import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { TAboutMe } from "../../additionally/interfaces";

const AboutMe = () => {
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
    <AboutMeStyle>
      <ContainerInfoMeStyle>
        <TitleBlockStyle>
          <TitleStyle>
            <MarkedSymbolStyle>#</MarkedSymbolStyle>
            {dataAboutMe && dataAboutMe.title}
          </TitleStyle>
          <LineTitleStyle />
        </TitleBlockStyle>
        <ContainerTextStyle>
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
              dataAboutMe.descriptionMe[2]}
          </TextStyle>
        </ContainerTextStyle>
        <LinkStyle to={"/aboutme"}>
          <ButtonStyle>{dataAboutMe && dataAboutMe.button_more}</ButtonStyle>
        </LinkStyle>
      </ContainerInfoMeStyle>
      <ContainerPhotoImageStyle>
        <PhotoImageStyle src={dataAboutMe && dataAboutMe.my_photo}/>
      </ContainerPhotoImageStyle>
    </AboutMeStyle>
  );
};

export default AboutMe;
