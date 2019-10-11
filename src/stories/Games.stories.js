import React from "react";
import Game from "../components/Game";
import Collection from "../components/CollectionGrid";

export default {
  title: "GameCollection"
};

export const singleGame = () => <Game />;

export const multipleGames = () => (
  <Collection>
    <Game />
    <Game />
    <Game />
    <Game />
    <Game />
    <Game />
    <Game />
    <Game />
    <Game />
    <Game />
    <Game />
    <Game />
  </Collection>
);
