import React, { useState, useEffect } from "react";
import { getBrowseCollection } from "../api/BrowseCollection";
import BrowseEmpty from "../components/BrowseEmpty";
import CollectionGrid from "../components/CollectionGrid";
import axios from "axios";

// export default function LibraryBrowse({ inputValue }) {
//   React.useEffect(() => {
//     getBrowseCollection().then(gameArray => {
//       setBrowseGame(gameArray);
//     });
//   }, []);

//   const [browseGame, setBrowseGame] = useState([]);
// const searchBrowseGames = browseGame.filter(info =>
//   info.name.toLowerCase().includes(inputValue.toLowerCase())
// );

//   return (
//     <>
//       {!inputValue && (
//         <BrowseEmpty>
//           Please use the searchbar to browse through our available games.
//         </BrowseEmpty>
//       )}
//       {inputValue && (
//         <CollectionGrid collection={searchBrowseGames} enabled={true} />
//       )}
//     </>
//   );
// }

export default function LibraryBrowse({ inputValue }) {
  const [apiGame, setApiGame] = useState();
  // const searchBrowseGames = apiGame.games.filter(info =>
  //   info.name.toLowerCase().includes(inputValue.toLowerCase())
  // );
  console.log(apiGame);

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl =
      "https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M";
    axios({
      url: proxyUrl + targetUrl,
      method: "GET",
      headers: {
        Accept: "application/json",
        "client-id": "5cIY9zBPpt"
      }
    })
      .then(response => {
        console.log(response.data);
        setApiGame(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  return (
    <>
      {!inputValue && (
        <BrowseEmpty>
          Please use the searchbar to browse through our available games.
        </BrowseEmpty>
      )}
      {inputValue && (
        <CollectionGrid collection={apiGame.games} enabled={true} />
      )}
    </>
  );
}
