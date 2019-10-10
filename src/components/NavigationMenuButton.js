import React from "react";
import styled from "styled-components";
import Dice from "../icons/Dice";

const StyledMenuButton = styled.button`
  display: flex;
  width: 75vw;
  height: 10vh;
  align-items: center;
  border: none;
  border-left: ${props => (props.selected ? "4px solid #F0A42A" : "none")};
  background-color: ${props =>
    props.selected ? props.theme.highlight : props.theme.accent};
`;

const StyledText = styled.text`
  font-size: 24px;
  font-family: Roboto;
  color: ${props =>
    props.selected ? props.theme.lightFont : props.theme.darkFont};
  margin-left: 15px;
`;

function NavigationMenuButton({ selected, children, onClick }) {
  return (
    <StyledMenuButton onClick={onClick} selected={selected}>
      <StyledText selected={selected}>{children}</StyledText>
    </StyledMenuButton>
  );
}
export default NavigationMenuButton;
