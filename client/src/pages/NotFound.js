import React from "react";
import styled from "styled-components";

const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Styledh1 = styled.h1`
  color: ${props => props.theme.brightEffect};
  font-size: 2em;
`;

export default function NotFound() {
  return (
    <FlexContainer>
      <Styledh1>Error: 404 Not found</Styledh1>
    </FlexContainer>
  );
}
