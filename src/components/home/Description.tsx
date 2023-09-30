import React from "react";
import {
  PhotoStyle,
  ContainerPhotoStyle,
  TextDescriptionStyle,
  TitleStyle,
  ContainerInformationStyle,
  DescriptionStyle,
} from "../../styles/home/DescriptionStyled";
import { MarkedSymbolStyle, ButtonStyle } from "../../styles/AppStyled";

const Description: React.FC = () => {
  return (
    <DescriptionStyle>
      <ContainerInformationStyle>
        <TitleStyle>
          Привет! Меня зовут Кирилл и я <MarkedSymbolStyle>Front-end</MarkedSymbolStyle> разработчик
        </TitleStyle>
        <TextDescriptionStyle>Придумать текст</TextDescriptionStyle>
        <ButtonStyle>Напиши мне !!!</ButtonStyle>
      </ContainerInformationStyle>
      <ContainerPhotoStyle>
        <PhotoStyle />
      </ContainerPhotoStyle>
    </DescriptionStyle>
  );
};

export default Description;
