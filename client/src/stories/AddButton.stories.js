import React from "react";
import AddButton from "../components/AddButtonCollection";
import Star from "../icons/Star";

export default {
  title: "AddToLibrary"
};

export const AddCollection = () => (
  <AddButton>
    <Star />
  </AddButton>
);
