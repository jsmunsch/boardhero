import React from "react";
import StyledMenuButton from "../components/NavigationMenuButton";
import Dice from "../icons/Dice";
import StyledText from "../components/Title";

export default {
  title: "NavigationMenu"
};

export const NavButtonInactive = () => (
  <StyledMenuButton selected={false}>
    <Dice />
    <StyledText>Collection</StyledText>
  </StyledMenuButton>
);

export const NavButtonActive = () => (
  <StyledMenuButton selected={true}>
    <Dice />
    <StyledText>Peter</StyledText>
  </StyledMenuButton>
);

export const NavigationMenu = () => (
  <>
    <StyledMenuButton onClick={() => onClick("Collection")} selected>
      <Dice selected />
      <StyledText>Collection</StyledText>
    </StyledMenuButton>
    <StyledMenuButton onClick={() => onClick("User")} selected={false}>
      <Dice />
      <StyledText selected={false}>User</StyledText>
    </StyledMenuButton>
    <StyledMenuButton onClick={() => onClick("Share")} selected={false}>
      <Dice />
      <StyledText>Share</StyledText>
    </StyledMenuButton>
    <StyledMenuButton onClick={() => onClick("Wishlist")} selected={false}>
      <Dice />
      <StyledText>Wishlist</StyledText>
    </StyledMenuButton>
  </>
);

function onClick(input) {
  console.log(input);
}
