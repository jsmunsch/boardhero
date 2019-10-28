import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import darkTheme from "./themes/dark";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/login";
import Library from "./pages/library";

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
