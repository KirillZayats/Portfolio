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
import Work from "../components/works/Work";
import {
  ListWorksStyle,
} from "../styles/home/WorksStyled";

const Works: React.FC = () => {
  return (
    <ContainerPageStyle>
      <ContainerTitlePageStyle>
        <TitleBlockStyle>
          <TitleStyle>
            <MarkedSymbolStyle>/</MarkedSymbolStyle>проекты
          </TitleStyle>
        </TitleBlockStyle>
        <SubTitleStyle>Мои проекты</SubTitleStyle>
      </ContainerTitlePageStyle>
      <ContainerBlockColumnStyle>
        <TitleBlockStyle>
          <TitleStyle>
            <MarkedSymbolStyle>#</MarkedSymbolStyle>большие
          </TitleStyle>
          <LineTitleStyle />
        </TitleBlockStyle>
        <ListWorksStyle>
          <Work />
          <Work />
          <Work />
          <Work />
        </ListWorksStyle>
      </ContainerBlockColumnStyle>
      <ContainerBlockColumnStyle>
        <TitleBlockStyle>
          <TitleStyle>
            <MarkedSymbolStyle>#</MarkedSymbolStyle>маленькие
          </TitleStyle>
          <LineTitleStyle />
        </TitleBlockStyle>
        <ListWorksStyle>
          <Work />
          <Work />
        </ListWorksStyle>
      </ContainerBlockColumnStyle>
    </ContainerPageStyle>
  );
};

export default Works;
