import React from "react";
import { MarkedSymbolStyle, TitleStyle, TitleBlockStyle, LineTitleStyle } from "../../styles/AppStyled";
import {
    WorksStyle,
    ContainerTitleStyle,
    ListWorksStyle,
    LinkViewAllStyle,
    ContainerLinkDownStyle,
    ContainerLinkUpStyle,
} from '../../styles/home/WorksStyled'
import Work from "../works/Work";

const Works = () => {
  return (
    <WorksStyle>
      <ContainerTitleStyle>
        <TitleBlockStyle>
        <TitleStyle>
          <MarkedSymbolStyle>#</MarkedSymbolStyle>проекты
        </TitleStyle>
        <LineTitleStyle/>
        </TitleBlockStyle>
        <ContainerLinkUpStyle>
        <LinkViewAllStyle>{'Все проекты ~~>'}</LinkViewAllStyle>
        </ContainerLinkUpStyle>
      </ContainerTitleStyle>
      <ListWorksStyle>
        <Work/>
        <Work/>
        <Work/>
      </ListWorksStyle>
      <ContainerLinkDownStyle>
        <LinkViewAllStyle>{'Все проекты ~~>'}</LinkViewAllStyle>
        </ContainerLinkDownStyle>
    </WorksStyle>
  );
};

export default Works;
