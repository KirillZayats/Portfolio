import React from "react";
import { MarkedSymbolStyle, TitleStyle, TitleBlockStyle, LineTitleStyle } from "../../styles/AppStyled";
import {
    WorksStyle,
    ContainerTitleStyle,
    ListWorksStyle,
    LinkViewAllStyle,
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
        <LinkViewAllStyle>{'Все проекты ~~>'}</LinkViewAllStyle>
      </ContainerTitleStyle>
      <ListWorksStyle>
        <Work/>
        <Work/>
        <Work/>
      </ListWorksStyle>
    </WorksStyle>
  );
};

export default Works;
