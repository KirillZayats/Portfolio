import { styled } from "styled-components";
import { device, size } from "../media/MediaQueryStyled";
import { Link } from "react-router-dom";

const WorksStyle = styled.section`
  display: flex;
  flex-direction: column;
  z-index: 0;
  @media ${device.mobileS} {
    gap: 30px;
  }

  @media ${device.tablet} {
    gap: 45px;
  }
`;
const ContainerTitleStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LinkViewAllStyle = styled(Link)`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 8px;
&:link, &:visited {
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
}

&:hover {
    color: ${({ theme }) => theme.colors.MARKER_COLOR};
  } 
`;

const ListWorksStyle = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media ${device.mobileS} {
    gap: 30px;
  }

  @media ${device.tablet} {
    justify-content: space-between;
  }

  @media ${device.laptop} {
    justify-content: left;
    gap: 33px;
  }
  @media ${device.desktop} {
    gap: 57px;
  }
`;
const ElementListStyle = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  width: 330px;
`;
const ImageWorkStyle = styled.img``;
const TitleWorkStyle = styled.h4`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const TextStyle = styled.p`
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ButtonOpenStyle = styled.button`
  width: 110px;
  height: 37px;
  border: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
  background: inherit;
  color: ${({ theme }) => theme.colors.TEXT_COLOR};
`;
const ListTechnologyStyle = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
`;

const ContainerInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  padding: 16px;
`;
const ElementTechnologyStyle = styled.li``;

const ContainerLinkUpStyle = styled.div`
    @media ${device.mobileS} {
      display: none;
  }

  @media ${device.tablet} {
    display: block;
  }
`;
const ContainerLinkDownStyle = styled.div`
  @media ${device.mobileS} {
    display: block;
    text-align: center;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export {
  ContainerLinkDownStyle,
  ContainerLinkUpStyle,
  WorksStyle,
  ContainerInfoStyle,
  ContainerTitleStyle,
  ElementListStyle,
  ElementTechnologyStyle,
  ListTechnologyStyle,
  ListWorksStyle,
  ButtonOpenStyle,
  ImageWorkStyle,
  TitleWorkStyle,
  LinkViewAllStyle,
};
