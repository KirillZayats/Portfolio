import React from "react";
import {
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  LineTitleStyle,
} from "../../styles/AppStyled";
import {
  TextElementStyle,
  ElementListStyle,
  ListFactsStyle,
  FactsStyle
} from '../../styles/aboutMe/FactsMe'
import { LIST_FACTS } from "../../additionally/constants";

const FactsMe = () => {
  return (
    <FactsStyle>
      <TitleBlockStyle>
        <TitleStyle>
          <MarkedSymbolStyle>#</MarkedSymbolStyle>факты обо мне
        </TitleStyle>
        <LineTitleStyle />
      </TitleBlockStyle>
      <ListFactsStyle>
        {LIST_FACTS.map((element, index) => (
          <ElementListStyle key={index}>
            <TextElementStyle>{element}</TextElementStyle>
          </ElementListStyle>
        ))}
      </ListFactsStyle>
    </FactsStyle>
  );
};

export default FactsMe;
