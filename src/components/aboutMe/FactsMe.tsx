import React from 'react'
import { styled } from "styled-components";
import {
    MarkedSymbolStyle,
    TitleStyle,
    TitleBlockStyle,
    LineTitleStyle,
  } from "../../styles/AppStyled";
import { LIST_FACTS } from '../../additionally/constants';
const FactsStyle = styled.section`
      display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 45px;
`;

const ListFactsStyle = styled.ul`
          display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;
const ElementListStyle = styled.li`
    border: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
    padding: 8px;
`;
const TextElementStyle = styled.p`
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};

`;

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
        {LIST_FACTS.map((element, index) => (<ElementListStyle key={index}><TextElementStyle>{element}</TextElementStyle></ElementListStyle>))}
      </ListFactsStyle>
    </FactsStyle>
  )
}

export default FactsMe