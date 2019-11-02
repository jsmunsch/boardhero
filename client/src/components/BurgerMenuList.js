import React from "react";
import styled, { keyframes } from "styled-components";
import StyledMenuButton from "./library/NavigationMenuButton";
import Dice from "../icons/Dice";
import Person from "../icons/Person";
import Upload from "../icons/Upload";
import Star from "../icons/Star";
import { Background } from "./popup-card/CardModal";

const morph = keyframes`
  0% { width: 0px;}
  100% { width: 100%}
`;

const PositionContainer = styled.div`
  position: absolute;
  left: 0px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw;
  height: 100vh;
  background-color: ${props => props.theme.accent};
  animation: ${morph} 0.3s ease-in-out;
`;

export default function BurgerMenuList({ handleOutsideClick }) {
  return (
    <>
      <PositionContainer>
        <StyledMenuButton onClick={() => console.log("Collection")} selected>
          <Dice selected />
          Collection
        </StyledMenuButton>
        <StyledMenuButton onClick={() => console.log("User")}>
          <Person />
          User
        </StyledMenuButton>
        <StyledMenuButton onClick={() => console.log("Share")}>
          <Upload />
          Share
        </StyledMenuButton>
        <StyledMenuButton onClick={() => console.log("Wishlist")}>
          <Star />
          Wishlist
        </StyledMenuButton>
      </PositionContainer>
    </>
  );
}
