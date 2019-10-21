import React from "react";
import styled, { keyframes } from "styled-components";

const morph = keyframes`
  0% { width: 0px;}
  100% { width: 100%}
`;
const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
  color: white;
  margin-left: 10px;
  animation: ${morph} 0.5s linear;
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
  animation: ${morph} 0.5s linear;
`;

export default function SearchBar({ active, onSearch }) {
  function handleInputChange(event) {
    const value = event.target.value;
    onSearch(value);
  }
  return (
    <StyledSearchBar active={active}>
      {active && (
        <StyledInput
          type="search"
          placeholder="Enter Game Name"
          onChange={handleInputChange}
        />
      )}
    </StyledSearchBar>
  );
}
