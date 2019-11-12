import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 15px;
  background-color: ${props => props.theme.brightEffect};
  position: absolute;
  bottom: 10px;
  left: 15px;
  height: 40px;
  width: 130px;
  border: none;
  color: white;
  outline: none;
  box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.15);
  font-size: 1.1em;
`;

export default function AddButtonCollection({
  children,
  singleGame,
  setStartAnimation,
  newGame
}) {
  return (
    <StyledButton
      onClick={() => {
        newGame(singleGame);
        setStartAnimation(true);
        setTimeout(() => {
          setStartAnimation(false);
        }, 5000);
      }}
    >
      {children}
    </StyledButton>
  );
}
