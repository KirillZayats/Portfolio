import { styled } from "styled-components";
import { device, size } from "../media/MediaQueryStyled";
import { SidebarStyle } from "./SidebarStyled";

const NavStyle = styled.nav`
  margin-left: auto;
`;
const ListNavStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

const HeaderStyle = styled.header`
  margin: 0 auto;
  width: 100%;
  position: fixed;
`;

const ContainerStyle = styled.div`
  background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 8px;
  gap: 32px;
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

  input[type="checkbox"]:checked ~ ${SidebarStyle} .top {
    transform: rotate(-45deg);
    top: 4px;
  }
  input[type="checkbox"]:checked ~ ${SidebarStyle} .bottom {
    transform: rotate(45deg);
    width: 22px;
    top: -2px;
  }
`;

export {
  ContainerStyle,
  HeaderStyle,
  NavStyle,
  ListNavStyle,
};
