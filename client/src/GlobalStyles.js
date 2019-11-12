import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
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

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
