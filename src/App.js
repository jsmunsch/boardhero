import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import defaultTheme from "./themes/default.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Collection from "./pages/Collection";

const Container = styled.div`
  display: grid;
  grid-template: 60px 1fr;
  background: ${props => props.theme.main};
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyles />
        <Router>
          <Route path="/" exact component={Collection} />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
