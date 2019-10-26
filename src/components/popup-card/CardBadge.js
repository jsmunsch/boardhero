import React from "react";
import styled from "styled-components";

const StyledBadge = styled.span`
  border-radius: 40px;
  border: 1px solid #000000;
  padding: 3px 10px;
  font-size: 20px;
  color: #000000;
  background: white;
  margin: 3px 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`;
export default function CardBadge({ children }) {
  return <StyledBadge>{children}</StyledBadge>;
}
