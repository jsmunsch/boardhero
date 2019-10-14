import React from "react";
import styled from "styled-components";

const WrapperBadge = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 10px;
  flex-direction: column;
  width: 100px;
`;

const StyledBadge = styled.span`
  border-radius: 5px;
  border: 1px solid #000000;
  padding: 3px 10px;
  font-size: 20px;
  color: #000000;
  background: white;
  margin-right: 5px;
`;
export default function CardBadge({ children }) {
  return (
    <WrapperBadge>
      <StyledBadge>{children}</StyledBadge>
    </WrapperBadge>
  );
}
