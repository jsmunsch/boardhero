import React, { useState } from "react";
import Header from "../components/Header";
import LibraryNav from "../components/LibraryNav";
import CollectionGrid from "../components/CollectionGrid";
import CollectionItem from "../components/CollectionItem";
import OptionBox from "../components/OptionBox";
import SortModal from "../components/SortModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BrowseEmpty from "../components/BrowseEmpty";
import CardModal from "../components/CardModal";
import { getAsyncBrowseGames } from "../api/BrowseCollection";
import {
  getAsyncWishlistGames,
  postGameToWishlist
} from "../api/WishlistCollection";
import {
  getAsyncCollectionGames,
  postGameToCollection
} from "../api/GameCollection";

export default function Library() {
  const [currentNavigation, setCurrentNavigation] = useState("");
  const [toggleOptions, setToggleOptions] = useState(false);
  const [displaySort, setDisplaySort] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectGame, setSelectGame] = useState();
  const [browseGame, setBrowseGame] = useState([]);
  const [wishlistGame, setWishlistGame] = useState([]);
  const [collectionGame, setCollectionGame] = useState([]);
  const [boolean, setBoolean] = useState(true);

  React.useEffect(() => {
    getAsyncBrowseGames().then(gameArray => {
      setBrowseGame(gameArray);
    });
  }, [boolean]);

  React.useEffect(() => {
    getAsyncWishlistGames().then(gameArray => {
      setWishlistGame(gameArray);
    });
  }, [boolean]);
  React.useEffect(() => {
    getAsyncCollectionGames().then(gameArray => {
      setCollectionGame(gameArray);
    });
  }, [boolean]);

  const searchCollectionGames = collectionGame.filter(info =>
    info.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  const searchWishlistGames = wishlistGame.filter(info =>
    info.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  const searchBrowseGames = browseGame.filter(info =>
    info.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  async function addGameToCollection() {
    postGameToCollection(selectGame);
    setBoolean(!boolean);
  }
  async function addGameToWishlist() {
    postGameToWishlist(selectGame);
  }
  function handleSearch(value) {
    setInputValue(value);
  }
  return (
    <>
      {showModal && (
        <CardModal
          handleOutsideClick={() => setShowModal(false)}
          selectedGame={selectGame}
          onCollectionButton={addGameToCollection}
          onWishlistButton={addGameToWishlist}
        />
      )}
      <Header
        toggleOptions={() => setToggleOptions(!toggleOptions)}
        toggleSearchbar={() => setShowSearchbar(!showSearchbar)}
        active={showSearchbar}
        handleInputChange={setTextInput}
        onSearch={handleSearch}
      />
      <OptionBox
        show={toggleOptions}
        onClick={() => setDisplaySort(!displaySort)}
      />
      <SortModal show={displaySort} />
      <LibraryNav
        selected={currentNavigation}
        onNavigationChange={setCurrentNavigation}
      />
      <Switch>
        <Route exact path="/Library/Collection">
          <CollectionGrid>
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
        </Route>
        <Route exact path="/Library/Browse">
          {!textInput && (
            <BrowseEmpty>
              Please use the searchbar to browse through our available games.
            </BrowseEmpty>
          )}
          {textInput && (
            <CollectionGrid>
              {searchBrowseGames.map(game => (
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
            {searchWishlistGames.map(game => (
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
