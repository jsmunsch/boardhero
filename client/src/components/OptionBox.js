import React from "react";
import styled from "styled-components";

const OptionBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 170px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.lightBackground};
  border: none;
  position: absolute;
  top: 35px;
  right: 25px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`;

const OptionButton = styled.button`
  height: 50%;
  width: 100%;
  background-color: inherit;
  border: inherit;
  color: white;
  font-size: 1.4em;
  outline: none;
`;

export default function OptionBox({ show, onClick }) {
  return (
    <>
      {show && (
        <OptionBoxDiv>
          <OptionButton onClick={() => onClick("Sort")}>Sort</OptionButton>
          <OptionButton>Filter</OptionButton>
        </OptionBoxDiv>
      )}
    </>
  );
}
