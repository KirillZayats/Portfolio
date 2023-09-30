import { styled } from "styled-components";

const CardSkillStyle = styled.div`
  max-width: 180px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  font-size: 16px;
  font-style: normal;
  line-height: normal;
`;
const NameContainerStyle = styled.h4`
  font-weight: 600;
  padding: 8px;
`;
const ListElementsStyle = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  padding: 8px;
`;
const ElementListStyle = styled.li`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
`;

export {
  ElementListStyle,
  ListElementsStyle,
  NameContainerStyle,
  CardSkillStyle,
};
