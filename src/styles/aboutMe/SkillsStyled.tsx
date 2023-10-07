import { styled } from "styled-components";
import { device } from "../media/MediaQueryStyled";

const SkillsStyle = styled.section`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    gap: 30px;
  }

  @media ${device.tablet} {
    gap: 40px;
  }
`;
const ContainerContentStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media ${device.mobileS} {
    row-gap: 25px;
  }

  @media ${device.mobileL} {
    justify-content: space-between;
  }

  @media ${device.tablet} {
    justify-content: left;
    gap: 10px;
  }
  @media ${device.tabletS} {
    gap: 20px;
  }

  @media ${device.laptop} {
    row-gap: 25px;
    column-gap: 55px;
  }

  @media ${device.desktop} {
    gap: 25px;
  }
`;

export { SkillsStyle, ContainerContentStyle };
