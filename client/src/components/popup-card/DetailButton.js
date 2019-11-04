import React from "react";
import styled from "styled-components";
import DoubleArrow from "../../icons/DoubleArrow";

const ButtonContainer = styled.button`
  background: transparent;
  fill: white;
  border: none;
`;

export default function DetailButton({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <DoubleArrow />
    </ButtonContainer>
  );
}
