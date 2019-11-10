import React from "react";
import MainContent from "../components/User-page.js/MainContent";
import Title from "../components/User-page.js/Title";
import RecentlyAdded from "../components/User-page.js/RecentlyAdded";
import Placeholder from "../components/User-page.js/Placeholder";
import { useHistory } from "react-router-dom";

export default function UserOverview({
  filteredGames,
  text,
  buttonText,
  onClick
}) {
  let history = useHistory();
  let bool = filteredGames.name;
  return (
    <MainContent>
      {!bool && (
        <Placeholder
          text="Is this your first time here ? To display your recently added games add some first. Let's go!"
          buttonText="Add Games"
          onClick={() => history.push("/library/browse")}
        />
      )}
      {bool && (
        <Title>
          <span>Recently Added</span>
        </Title>
      )}
      {filteredGames.slice(0, 5).map(game => (
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
