import React from "react";
import MainContent from "../components/User-page.js/MainContent";
import Title from "../components/User-page.js/Title";
import RecentlyAdded from "../components/User-page.js/RecentlyAdded";

export default function UserOverview({ filteredGames }) {
  return (
    <MainContent>
      <Title>
        <span>Recently Added</span>
      </Title>
      {filteredGames &&
        filteredGames
          .slice(0, 5)
          .map(game => (
            <RecentlyAdded
              key={game.id}
              src={game.image_url}
              name={game.name}
              description={game.id}
            />
          ))}
    </MainContent>
  );
}
