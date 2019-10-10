import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import defaultTheme from "./themes/default.js";

const Container = styled.div`
  display: grid;
  grid-template: 60px 1fr;
  background: ${props => props.theme.main};
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyle />
        <header>Hello</header>
        <div>ciao</div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
