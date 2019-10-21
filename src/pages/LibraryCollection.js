import React, { useState } from "react";

export default function LibraryCollection() {
  return (
    <CollectionGrid
      collection={searchCollectionGames}
      onItemClick={game => {
        setSelectGame(game);
        setShowModal(!showModal);
      }}
    >
      {/* Create 3 seperate components to map respective games */}
      {searchCollectionGames.map(game => (
        <CollectionItem
          key={game.id}
          onClick={() => {
            setSelectGame(game);
            setShowModal(!showModal);
          }}
          src={game.image_url}
        />
      ))}
    </CollectionGrid>
  );
}
