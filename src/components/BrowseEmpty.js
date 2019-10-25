import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  font-size: 26px;
  color: white;
  align-items: center;
  text-align: center;
  height: 60vh;
  justify-content: center;
`;

export default function BrowseEmpty({ children }) {
  return <FlexContainer>{children}</FlexContainer>;
}
