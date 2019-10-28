import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    font-family: Roboto, sans-serif;
    height: 100vh;
    width: 100vw;
    background: ${props => props.theme.main};
  }
`;

export default GlobalStyles;
