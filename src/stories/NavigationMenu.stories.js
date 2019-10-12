import React from "react";
import StyledMenuButton from "../components/NavigationMenuButton";
import Dice from "../icons/Dice";
import Person from "../icons/Person";
import Upload from "../icons/Upload";
import Star from "../icons/Star";

export default {
  title: "NavigationMenu"
};

export const NavButtonInactive = () => (
  <StyledMenuButton>
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
    <StyledMenuButton onClick={() => onClick("User")}>
      <Person />
      User
    </StyledMenuButton>
    <StyledMenuButton onClick={() => onClick("Share")}>
      <Upload />
      Share
    </StyledMenuButton>
    <StyledMenuButton onClick={() => onClick("Wishlist")}>
      <Star />
      Wishlist
    </StyledMenuButton>
  </>
);

function onClick(input) {
  console.log(input);
}
