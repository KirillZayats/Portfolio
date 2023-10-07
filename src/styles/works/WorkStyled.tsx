import { styled } from "styled-components";
import { device, size } from "../media/MediaQueryStyled";

const ElementListStyle = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};

  @media ${device.mobileS} {
    width: calc(100% - 2px);
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

const ContainerImageWorkStyle = styled.div`
  width: 100%;

  .swiper-wrapper,
  .swiper-slide {
    transition: all 1.4s ease-in-out;
    transition-duration: 500ms !important;
    cursor: pointer;
  }

  .swiper-pagination {
    bottom: 16px !important;
    cursor: pointer;
  }

  .swiper-pagination-bullet {
    width: 13px;
    height: 13px;
    box-shadow: 1px 1px 1px black;
    background: inherit;
    border: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
    transition: all 0.3s ease-in;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.MARKER_COLOR};
    border: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
  }
`;
const ImageWorkStyle = styled.img`
  width: 100%;
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
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
`;

const ContainerInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
  padding: 16px;

  p {
    height: 60px;
  }
`;
const ElementTechnologyStyle = styled.li``;
const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const ButtonStyle = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
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

const LinkStyle = styled.a`
  width: 100%;
`;
export {
  ContainerInfoStyle,
  TextStyle,
  ElementListStyle,
  ElementTechnologyStyle,
  ListTechnologyStyle,
  ContainerImageWorkStyle,
  TitleWorkStyle,
  CardStyle,
  ContainerButtons,
  ButtonStyle,
  ImageWorkStyle,
  LinkStyle,
};
