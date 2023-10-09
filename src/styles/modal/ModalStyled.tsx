import { styled } from "styled-components";
import { device, size } from "../../styles/media/MediaQueryStyled";

const ModalStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  z-index: 999;
  &.active {
    transform: scale(1);
  }
`;

const ContainerModalStyle = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 600px;
  padding: 20px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  border: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};

  transform: scale(0);
  transition: all .5s ease;
  &.active {
    transform: scale(1);
    transition: all .5s ease;

  }

  @media ${device.mobileS} {
    max-width: calc(${size.mobileS} - 70px);
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 70px);
  }

  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 90px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 90px);
  }
`;

const HeaderModalStyle = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
`;

const BodyModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const SectionModalStyle = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 1.2s ease;

`;

const TitleSectionStyle = styled.h5`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

`;

const TextSectionStyle = styled.p`
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`;

const SectionYearStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const FooterModalStyle = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
  padding-top: 12px;
`;

const ButtonStyle = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
  max-width: 250px;
  width: 100%;
  height: 37px;
  background: inherit;
  color: ${({ theme }) => theme.colors.TEXT_COLOR};

  &:hover {
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
    border: 1px solid ${({ theme }) => theme.colors.TEXT_COLOR};
    background: ${({ theme }) => theme.colors.MARKER_COLOR};
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const LinkStyle = styled.a`
  max-width: 250px;
  width: 100%;
`;

export { ContainerModalStyle, 
  ModalStyle,
  TextSectionStyle,
  TitleSectionStyle,
  HeaderModalStyle,
  BodyModalStyle,
  SectionModalStyle,
  SectionYearStyle,
  ButtonStyle,
  FooterModalStyle,
  ContainerButtons,
  LinkStyle
 };
