import { styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.MAIN_BG_COLOR};
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
    font-family: 'Fira Code', sans-serif;

  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

const MarkedSymbolStyle = styled.span`
  color: ${({ theme }) => theme.colors.MARKER_COLOR};
`;

const TitleStyle = styled.h2`
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const LineTitleStyle = styled.div`
  width: 240px;
  height: 2px;
  background: ${({ theme }) => theme.colors.MARKER_COLOR};
`;

const TitleBlockStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

const ButtonStyle = styled.button`
    border: 1px solid ${({ theme }) => theme.colors.MARKER_COLOR};
    width: 148px;
    height: 37px;
    background: inherit;
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
`;

export {
  GlobalStyle,
  MarkedSymbolStyle,
  TitleStyle,
  TitleBlockStyle,
  LineTitleStyle,
  ButtonStyle
};
