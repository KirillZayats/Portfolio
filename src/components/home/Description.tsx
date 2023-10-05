import React from "react";
import {
  TextDescriptionStyle,
  TitleStyle,
  ContainerInformationStyle,
  DescriptionStyle,
  LinkButtonStyle
} from "../../styles/home/DescriptionStyled";
import { MarkedSymbolStyle, ButtonStyle } from "../../styles/AppStyled";
import { LINK_EMAIL } from "../../additionally/constants";

const Description: React.FC = () => {
  return (
    <DescriptionStyle >
      <ContainerInformationStyle>
        <TitleStyle>
          Привет! Меня зовут Кирилл и я <MarkedSymbolStyle>Front-end</MarkedSymbolStyle> разработчик
        </TitleStyle>
        <TextDescriptionStyle>Воплощаю ваши идеи в реальность!!!</TextDescriptionStyle>
        <LinkButtonStyle to={LINK_EMAIL} target="_blank">
        <ButtonStyle>Написать</ButtonStyle>
        </LinkButtonStyle>
      </ContainerInformationStyle>
    </DescriptionStyle>
  );
};

export default Description;
