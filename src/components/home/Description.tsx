import React from "react";
import {
  TextDescriptionStyle,
  TitleStyle,
  ContainerInformationStyle,
  DescriptionStyle,
} from "../../styles/home/DescriptionStyled";
import { MarkedSymbolStyle, ButtonStyle } from "../../styles/AppStyled";

const Description: React.FC = () => {
  return (
    <DescriptionStyle >
      <ContainerInformationStyle>
        <TitleStyle>
          Привет! Меня зовут Кирилл и я <MarkedSymbolStyle>Front-end</MarkedSymbolStyle> разработчик
        </TitleStyle>
        <TextDescriptionStyle>Воплощаю ваши идеи в реальность!!!</TextDescriptionStyle>
        <ButtonStyle>Написать</ButtonStyle>
      </ContainerInformationStyle>
    </DescriptionStyle>
  );
};

export default Description;
