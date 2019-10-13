import React from "react";
import styled from "styled-components";

const WrapperBadge = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 10px 10px;
  flex-direction: column;
  width: 100px;
`;

const StyledBadge = styled.span`
  border-radius: 5px;
  padding: 3px 10px 3px 10px;
  font-family: "Roboto", sans-serif;
  border: 1px solid black;
  font-size: 20px;
  color: #000000;
  background: white;
  margin-right: 5px;
`;
export default function CardBadge({ children }) {
  return <StyledBadge>{children}</StyledBadge>;
}

export function FlexContainer() {
  return <WrapperBadge />;
}
