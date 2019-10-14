import React from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.lightBackground};
  backdrop-filter: opacity(0.8);
  flex-grow: 1;
  color: white;
  padding: 30px;
  position: absolute;
  top: 250px;
  right: 120px;
  font-size: 1.4em;
  display: ${props => (props.show ? "block" : "none")};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`;
/* ${props => (props.show ? "block" : "none")}; */
const RadioButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export default function SortModal({ show }) {
  return (
    <PopupContainer show={show}>
      Sort
      <RadioButtonContainer>
        <input name="sort" type="radio" id="sort1" value="alphabetically" />
        <label for="sort1">Alphabetically</label>
      </RadioButtonContainer>
      <RadioButtonContainer>
        <input name="sort" type="radio" id="sort2" value="newest" />
        <label for="sort1">Newest</label>
      </RadioButtonContainer>
    </PopupContainer>
  );
}
