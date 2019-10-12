import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  outline: none;
  fill: white;
  width: 40px;
  height: 40px;
  background: none;
`;

function IconButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default IconButton;
