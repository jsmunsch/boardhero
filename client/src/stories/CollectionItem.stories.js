import React from "react";
import CollectionItem from "../components/CollectionItem";
import CollectionGrid from "../components/CollectionGrid";

export default {
  title: "GameCollection"
};

export const singleGame = () => <CollectionItem />;

export const multipleGames = () => (
  <CollectionGrid>
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
    <CollectionItem />
  </CollectionGrid>
);
