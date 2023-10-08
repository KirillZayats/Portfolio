import { styled } from "styled-components";
import { device } from "../media/MediaQueryStyled";

const AboutMeStyle = styled.section`
  display: flex;

  @media ${device.mobileS} {
    flex-direction: column;
    gap: 30px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContainerInfoMeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 430px;
  }

  @media ${device.tabletS} {
    width: 515px;
  }

  @media ${device.desktop} {
    width: 715px;
  }
`;

const ContainerTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TextStyle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};

  @media ${device.mobileS} {
    font-size: 14px;
  }

  @media ${device.tabletS} {
    font-size: 16px;
  }
`;

const ContainerPhotoImageStyle = styled.div`
  display: flex;
  align-items: center;
`;
const PhotoImageStyle = styled.img`
  object-fit: cover;
  @media ${device.mobileS} {
    width: 100%;
    height: 350px;
  }

  @media ${device.mobileM} {
    width: 100%;
    height: 360px;
  }

  @media ${device.mobileL} {
    width: 100%;
    height: 400px;
  }

  @media ${device.tablet} {
    width: 300px;
    height: 350px;
  }

  @media ${device.tablet} {
    width: 340px;
    height: 410px;
  }
`;

export {
  PhotoImageStyle,
  ContainerInfoMeStyle,
  ContainerPhotoImageStyle,
  TextStyle,
  AboutMeStyle,
  ContainerTextStyle,
};
