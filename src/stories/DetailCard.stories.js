import React from "react";
import CardImage from "../components/CardModal";
import CardBadge from "../components/CardBadge";
import { GamePositioned } from "../components/Game";
import AbsoluteImageContainer from "../components/Game";
import CardModal from "../components/CardModal";

export default {
  title: "DetailCard"
};

// export const CardLayout = () => <CardModal />;

// export const CardWithBadges = () => (
//   <CardModal>
//     <CardBadge>Hallo</CardBadge>
//     <CardBadge>Test</CardBadge>
//   </CardModal>
// );

export const CardWithImage = () => (
  <CardModal>
    <GamePositioned />
  </CardModal>
);
