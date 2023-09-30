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

export {
  GlobalStyle
}