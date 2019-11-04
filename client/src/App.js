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
            <Route path="/library">
              <Library />
            </Route>
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
