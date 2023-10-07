import { styled } from "styled-components";
import { device, size } from "../media/MediaQueryStyled";

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 45px;
  padding: 32px 0;
  margin: 0 auto;

  @media ${device.mobileS} {
    max-width: calc(100% - 20px);
  }

  @media ${device.mobileM} {
    max-width: calc(${size.mobileM} - 30px);
  }

  @media ${device.mobileL} {
    max-width: calc(${size.mobileL} - 50px);
  }

  @media ${device.tablet} {
    max-width: calc(${size.tablet} - 50px);
  }
  @media ${device.tabletS} {
    max-width: calc(${size.tabletS} - 50px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 50px);
  }

  @media ${device.desktop} {
    max-width: calc(${size.desktop} - 300px);
  }
`;

const FooterStyle = styled.footer`
  margin: 0 auto;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContainerMainFooterStyle = styled.div`
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
    gap: 25px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${device.desktop} {
  }
`;

const ContainerInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TextFooterStyle = styled.p``;
const ContainerMediaStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TitleContainerMediaStyle = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;

const ContainerIconsLinkStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  svg:hover path {
    fill: ${({ theme }) => theme.colors.TEXT_COLOR};
  }
`;

const LinkIconStyle = styled.a``;

const TextCopyrightStyle = styled.p`
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  text-align: center;
`;

export {
  TextCopyrightStyle,
  ContainerIconsLinkStyle,
  ContainerInfoStyle,
  ContainerMainFooterStyle,
  ContainerMediaStyle,
  TitleContainerMediaStyle,
  TextFooterStyle,
  FooterStyle,
  ContainerStyle,
  LinkIconStyle,
};
