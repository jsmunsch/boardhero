import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import darkTheme from "./themes/dark";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Library from "./pages/library";
import Login from "./pages/login";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
