import React from 'react'
import { styled } from "styled-components";

const DescriptionStyle = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
`;

const ContainerInformationStyle = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const TitleStyle = styled.h1`
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;
const TextDescriptionStyle = styled.p`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 25px;
color: ${({ theme }) => theme.colors.SECOND_TEXT_COLOR};
`;

const ButtonStyle = styled.button`
    border: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
    width: 148px;
    height: 37px;
    background: inherit;
    color: ${({ theme }) => theme.colors.TEXT_COLOR};

`;

const ContainerPhotoStyle = styled.div`
width: 456px;
background: #000;

`;

const PhotoStyle = styled.img``;

const Description: React.FC = () => {
  return (
    <DescriptionStyle>
      <ContainerInformationStyle>
        <TitleStyle>
            Привет! Меня зовут Кирилл и я Front-end разработчик.
        </TitleStyle>
        <TextDescriptionStyle>
            Придумать текст
        </TextDescriptionStyle>
        <ButtonStyle>
            Напиши мне !!!
        </ButtonStyle>
      </ContainerInformationStyle>
      <ContainerPhotoStyle>
        <PhotoStyle/>
      </ContainerPhotoStyle>
    </DescriptionStyle>
  )
}

export default Description
