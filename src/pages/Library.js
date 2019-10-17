import React, { useState } from "react";
import Header from "../components/Header";
import LibraryNav from "../components/LibraryNav";
import CollectionGrid from "../components/CollectionGrid";
import CollectionItem from "../components/CollectionItem";
import OptionBox from "../components/OptionBox";
import SortModal from "../components/SortModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BrowseEmpty from "../components/BrowseEmpty";
import { getGameCollection } from "../api/GameCollection";
import { getBrowseCollection } from "../api/BrowseCollection";
import { getGameWishlist } from "../api/WishlistCollection";

import CardModal from "../components/CardModal";
export default function Library() {
  const [navigation, setNavigation] = useState("");
  const [options, setOptions] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [textInput, setTextInput] = React.useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectGame, setSelectGame] = useState();

  async function fetchCollectionData() {
    const gameCollection = await getGameCollection();
    return gameCollection;
  }

  const browseCollection = Object.entries(getBrowseCollection());
  const wishlistCollection = Object.entries(getGameWishlist());
  const gameCollection = getGameCollection();
  const game123 = gameCollection.then(function(game123) {
    console.log(game123);
  });
  const searchContentBrowse = browseCollection.filter(info =>
    info.name.toLowerCase().includes(textInput.toLowerCase())
  );

  const searchContentCollection = Object.keys(game123).filter(info =>
    info.name.toLowerCase().includes(textInput.toLowerCase())
  );
  const searchContentWishlist = wishlistCollection.filter(info =>
    info.name.toLowerCase().includes(textInput.toLowerCase())
  );
  function handleSearch(value) {
    setTextInput(value);
  }
  return (
    <>
      {showModal && (
        <CardModal
          handleOutsideClick={() => setShowModal(false)}
          selectedGame={selectGame}
        />
      )}
      <Header
        toggleOptions={() => setOptions(!options)}
        toggleSearchbar={() => setVisibility(!visibility)}
        active={visibility}
        handleInputChange={setTextInput}
        onSearch={handleSearch}
      />
      <OptionBox show={options} onClick={() => setShowSort(!showSort)} />
      <SortModal show={showSort} />
      <LibraryNav selected={navigation} onNavigationChange={setNavigation} />
      <Switch>
        <Route exact path="/Library/Collection">
          <CollectionGrid>
            {searchContentCollection.map(game => (
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
        </Route>
        <Route exact path="/Library/Browse">
          {!textInput && (
            <BrowseEmpty>
              Please use the searchbar to browse through our available games.
            </BrowseEmpty>
          )}
          {textInput && (
            <CollectionGrid>
              {searchContentBrowse.map(game => (
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
          )}
        </Route>
        <Route exact path="/Library/Wishlist">
          <CollectionGrid>
            {searchContentWishlist.map(game => (
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
        </Route>
      </Switch>
    </>
  );
}
