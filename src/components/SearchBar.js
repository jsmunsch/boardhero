import React from "react";
import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
  color: white;
  margin-left: 10px;
  visibility: ${props => (props.active ? "visible" : "hidden")};
`;

const StyledInput = styled.input`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
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
  fill: white;
  color: white;
`;

export default function SearchBar({ active }) {
  return (
    <StyledSearchBar active={active}>
      <StyledInput
        type="search"
        placeholder="Enter Game Name"
        onChange={event => console.log(event.target.value)}
      />
    </StyledSearchBar>
  );
}
