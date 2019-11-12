import React from "react";
import styled from "styled-components";
import { morph } from "../../animations/morph";
import { slideIn } from "../../animations/slideIn";

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
  color: white;
  margin-left: 10px;
`;

const StyledInput = styled.input`
  background-color: inherit;
  border: 1px solid ${props => props.theme.brightEffect};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  ::placeholder {
    color: white;
  }
  :focus {
    outline: none;
  }
  font-size: 18px;
  padding: 10px;
  width: 100%;
  fill: white;
  color: white;
  animation: ${slideIn} 0.25s ease-in;
  -webkit-appearance: none;
`;

export default function SearchBar({ active, onSearch }) {
  let throttleTimeout;

  function handleInputChange(event) {
    clearTimeout(throttleTimeout);
    const inputValue = event.target.value;
    throttleTimeout = setTimeout(function() {
      onSearch(inputValue);
    }, 225);
  }
  return (
    <StyledSearchBar active={active}>
      {active && (
        <StyledInput
          type="search"
          placeholder="Enter Game Name"
          onChange={handleInputChange}
          autoFocus={true}
        />
      )}
    </StyledSearchBar>
  );
}
