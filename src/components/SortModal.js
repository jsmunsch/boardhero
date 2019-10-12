import React from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.main};
  backdrop-filter: blur(20px);
  margin: 150px 90px 150px 90px;
  flex-grow: 1;
  color: white;
  padding: 20px;
  display: block;
  position: absolute;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export default function SortModal() {
  return (
    <PopupContainer>
      Sort
      <RadioButtonContainer>
        <input
          name="sort"
          type="radio"
          id="sort1"
          value="alphabetically"
          checked
        />
        <label for="sort1">Alphabetically</label>
      </RadioButtonContainer>
      <RadioButtonContainer>
        <input name="sort" type="radio" id="sort2" value="newest" />
        <label for="sort1">Newest</label>
      </RadioButtonContainer>
    </PopupContainer>
  );
}
