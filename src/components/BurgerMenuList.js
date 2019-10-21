import React from "react";
import styled, { keyframes } from "styled-components";
import StyledMenuButton from "./NavigationMenuButton";
import Dice from "../icons/Dice";
import Person from "../icons/Person";
import Upload from "../icons/Upload";
import Star from "../icons/Star";
import { Background } from "./CardModal";

const positionContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
`;

export default function BurgerMenuList() {
  return (
    <positionContainer>
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
    </positionContainer>
  );
}
