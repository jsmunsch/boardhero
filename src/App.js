import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
    </Container>
  );
}

export default App;
