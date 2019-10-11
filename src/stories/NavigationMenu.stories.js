import React from "react";
import styled from "styled-components";
import StyledMenuButton from "../components/NavigationMenuButton";
import Dice from "../icons/Dice";
import Person from "../icons/Person";
import Upload from "../icons/Upload";
import Star from "../icons/Star";

export default {
  title: "NavigationMenu"
};

export const NavButtonInactive = () => (
  <StyledMenuButton selected={false}>
    <Dice />
    Collection
  </StyledMenuButton>
);

export const NavButtonActive = () => (
  <StyledMenuButton selected={true}>
    <Dice selected />
    Peter
  </StyledMenuButton>
);

export const NavigationMenu = () => (
  <>
    <StyledMenuButton onClick={() => onClick("Collection")} selected>
      <Dice selected />
      Collection
    </StyledMenuButton>
    <StyledMenuButton onClick={() => onClick("User")} selected={false}>
      <Person />
      User
    </StyledMenuButton>
    <StyledMenuButton onClick={() => onClick("Share")} selected={false}>
      <Upload />
      Share
    </StyledMenuButton>
    <StyledMenuButton onClick={() => onClick("Wishlist")} selected={false}>
      <Star />
      Wishlist
    </StyledMenuButton>
  </>
);

function onClick(input) {
  console.log(input);
}
