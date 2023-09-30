import { styled } from "styled-components";

const DescriptionStyle = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    padding: 60px 0;
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
margin: 32px 0 24px;
`;

const ContainerPhotoStyle = styled.div`
width: 456px;
background: #000;

`;

const PhotoStyle = styled.img``;

export {
    PhotoStyle,
    ContainerPhotoStyle,
    TextDescriptionStyle,
    TitleStyle,
    ContainerInformationStyle,
    DescriptionStyle
}