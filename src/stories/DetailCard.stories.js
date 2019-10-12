import React from "react";
import { GamePositioned } from "../components/Game";
import CardModal from "../components/CardModal";

export default {
  title: "DetailCard"
};

export const CardWithImage = () => (
  <CardModal>
    <GamePositioned />
  </CardModal>
);
