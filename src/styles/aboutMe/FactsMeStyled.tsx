import { styled } from "styled-components";
import { device } from "../media/MediaQueryStyled";

const FactsStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.mobileS} {
    gap: 30px;
  }

  @media ${device.tablet} {
    gap: 40px;
  }
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

export { TextElementStyle, ElementListStyle, ListFactsStyle, FactsStyle };
