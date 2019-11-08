import React, { useState } from "react";
import styled from "styled-components";
import CollectionGrid from "../components/library/CollectionGrid";
import { getGamesCollection } from "../api/fetchGames";
import Placeholder from "../components/User-page.js/Placeholder";
import { useHistory } from "react-router-dom";

const FlexContainer = styled.div`
  display: flex;
  height: 300px;
  color: white;
`;

export default function LibraryCollection({ searchbarInput }) {
  const [games, setGames] = useState([]);
  let history = useHistory();

  React.useEffect(() => {
    getGamesCollection().then(gameArray => {
      setGames(gameArray);
    });
  }, []);

  const searchGames = games.filter(info =>
    info.name.toLowerCase().includes(searchbarInput.toLowerCase())
  );

  return (
    <>
      <FlexContainer>
        <Placeholder
          text="Is this your first time using this App ? Start by Adding Games via the browse page!"
          buttonText="Add Games"
          onClick={() => history.push("/library/browse")}
        />
      </FlexContainer>
      )}
      <CollectionGrid collection={searchGames} />
    </>
  );
}
