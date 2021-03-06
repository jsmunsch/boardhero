import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import darkTheme from "./themes/dark";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Library from "./pages/Library";
import Register from "./pages/register";
import { useUser } from "./hooks";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import Impressum from "./pages/Impressum";

function App() {
  const [user] = useUser();

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          {user && (
            <>
              <Route path="/user">
                <User />
              </Route>

              <Route path="/library">
                <Library />
              </Route>
              <Route exact path="/impressum">
                <Impressum />
              </Route>
            </>
          )}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
