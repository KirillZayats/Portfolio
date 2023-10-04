import { styled } from "styled-components";
import { device, size } from "../media/MediaQueryStyled";

const CardSkillStyle = styled.article`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  font-size: 16px;
  font-style: normal;
  line-height: normal;

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.mobileL} {
    max-width: 180px;
  }

  @media ${device.tablet} {
    max-width: 170px;
  }

  @media ${device.laptop} {
    max-width: 200px;
  }

  @media ${device.desktop} {
    max-width: 182px;
  }
`;
const NameContainerStyle = styled.h4`
  font-weight: 600;
  padding: 8px;
`;
const ListElementsStyle = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 12px;
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
