import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 15px;
  background-color: ${props => props.theme.brightEffect};
  position: absolute;
  bottom: 10px;
  right: 15px;
  height: 40px;
  width: 135px;
  border: none;
  outline: none;
  box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.15);
  font-size: 1.1em;
  color: white;
`;

export default function AddButtonWishlist({
  children,
  setStartAnimation,
  singleGame,
  newWishlistEntry
}) {
  return (
    <StyledButton
      onClick={() => {
        newWishlistEntry(singleGame);
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
