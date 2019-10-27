import React from "react";
import styled from "styled-components";
import DoubleArrow from "../icons/DoubleArrow";

const ButtonContainer = styled.button`
  position: absolute;
  background: transparent;
  fill: black;
  top: 50%;
  right: 10px;
`;
export default function DetailButton({ handleClick }) {
  return (
    <ButtonContainer onClick={handleClick}>
      <DoubleArrow />
    </ButtonContainer>
  );
}
