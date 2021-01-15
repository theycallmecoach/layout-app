import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    font-family: ${(props) => props.theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  } 
`;

export default GlobalStyles;
