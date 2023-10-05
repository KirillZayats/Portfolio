import { styled } from "styled-components";
import { device, size } from "../media/MediaQueryStyled";
import { Link } from "react-router-dom";

const ElementListStyle = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};

  @media ${device.mobileS} {
    max-width: 100%;
  }
`;

const ImageWorkStyle = styled.img`
  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.mobileM} {
    width: calc(${size.mobileM} - 32px);
  }

  @media ${device.mobileL} {
    width: calc(${size.mobileL} - 52px);
  }

  @media ${device.tablet} {
   width: 330px;
  }

  @media ${device.laptop} {
   width: 300px;
  }

  @media ${device.desktop} {
   width: 340px;
  }
`;
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
const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ButtonStyle = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
  max-width: 170px;
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

const CardStyle = styled.article``;
export {
    ContainerInfoStyle,
    TextStyle,
    ElementListStyle,
    ElementTechnologyStyle,
    ListTechnologyStyle,
    ImageWorkStyle,
    TitleWorkStyle,
    CardStyle,
    ContainerButtons,
    ButtonStyle,
}