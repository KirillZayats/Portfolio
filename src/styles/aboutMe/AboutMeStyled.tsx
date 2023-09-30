import { styled } from "styled-components";

const AboutMeStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 60px 0;
`;

const ContainerInfoMeStyle = styled.div`
  width: 515px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const TextStyle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
`;

const ContainerPhotoImageStyle = styled.div`
  width: 340px;
  height: 500px;
  background: #000;
`;
const PhotoImageStyle = styled.img``;

export {
    PhotoImageStyle,
    ContainerInfoMeStyle,
    ContainerPhotoImageStyle,
    TextStyle,
    AboutMeStyle
}