import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 320px;
  height: 480px;
  background: white;
  position: relative;
`;

export default function CardModal({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
