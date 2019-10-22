import React from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  background-color: ${props => props.theme.lightBackground};
  color: white;
  padding: 30px;
  position: fixed;
  top: 100px;
  left: 50%;
  top: 50%;
  margin-left: -110px;
  margin-top: -80px;
  font-size: 1.4em;
  z-index: 3;
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
