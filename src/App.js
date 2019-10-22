import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import defaultTheme from "./themes/default.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Library from "./pages/Library";
import Login from "./pages/LoginLandingPage";

const Container = styled.div`
  background: ${props => props.theme.main};
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyles />
        <Router>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Library">
            <Library />
          </Route>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
