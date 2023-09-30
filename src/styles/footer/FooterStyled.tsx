import { styled } from "styled-components";

const ContainerStyle = styled.div`
  width: 1024px;
  background: ${({ theme }) => theme.colors.SECOND_BG_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 45px;
  margin: 0 auto;
  padding: 32px 0;
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
  flex-direction: row;
  justify-content: space-between;
`;

const ContainerInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TextFooterStyle = styled.p`

`;
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
`;

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
    ContainerStyle
}