import React from "react";
import IconButton from "../components/IconButton";
import BurgerMenu from "../icons/BurgerMenu";
import Magnifier from "../icons/Magnifier";
import VerticalPoints from "../icons/VerticalPoints";

export default {
  title: "IconButtons"
};

export const BurgerMenuButton = () => (
  <IconButton>
    <BurgerMenu />
  </IconButton>
);

export const SearchButton = () => (
  <IconButton>
    <Magnifier />
  </IconButton>
);

export const OptionButton = () => (
  <IconButton>
    <VerticalPoints />
  </IconButton>
);
