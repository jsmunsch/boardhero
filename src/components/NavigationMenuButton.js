import React from "react";
import styled from "styled-components";

const StyledMenuButton = styled.button`
  display: flex;
  width: 75vw;
  height: 8vh;
  align-items: center;
  justify-content: flex-start;
  border: none;
  border-left: ${props => (props.selected ? "3px solid #F0A42A" : "none")};
  background-color: ${props =>
    props.selected ? props.theme.highlight : props.theme.accent};
  color: ${props =>
    props.selected ? props.theme.lightFont : props.theme.darkFont};
  font-size: 20px;
`;

function NavigationMenuButton({ selected, children, onClick }) {
  return (
    <StyledMenuButton
      onClick={() => console.log({ children })}
      selected={selected === { children }}
    >
      {children}
    </StyledMenuButton>
  );
}
export default NavigationMenuButton;
