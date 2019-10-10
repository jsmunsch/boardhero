import React from "react";
import { configure, addDecorator } from "@storybook/react";
import GlobalStyle from "../src/GlobalStyle";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
`;

const GlobalStyleDecorator = storyFn => (
  <Container>
    <GlobalStyle />
    {storyFn()}
  </Container>
);
addDecorator(GlobalStyleDecorator);

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
