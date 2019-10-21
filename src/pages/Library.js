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
import { getBrowseCollection } from "../api/BrowseCollection";
import {
  postGameToWishlist,
  getWishlistCollection
} from "../api/WishlistCollection";
import { postGameToCollection, getGameCollection } from "../api/GameCollection";
import LibraryCollection from "./LibraryCollection";
import LibraryBrowse from "./LibraryBrowse";
import LibraryWishlist from "./LibraryWishlist";

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
    getBrowseCollection().then(gameArray => {
      setBrowseGame(gameArray);
    });
  }, [boolean]);

  React.useEffect(() => {
    getWishlistCollection().then(gameArray => {
      setWishlistGame(gameArray);
    });
  }, [boolean]);
  React.useEffect(() => {
    // Also export into respective Collection grid component
    getGameCollection().then(gameArray => {
      setCollectionGame(gameArray);
    });
  }, [boolean]);

  const searchBrowseGames = browseGame.filter(info =>
    info.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  async function addGameToCollection() {
    postGameToCollection(selectGame);
    setBoolean(!boolean);
  }
  async function addGameToWishlist() {
    postGameToWishlist(selectGame);
    setBoolean(!boolean);
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
        handleInputChange={setInputValue}
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
          <LibraryCollection currywurst={inputValue} />
        </Route>
        <Route exact path="/Library/Browse">
          <LibraryBrowse />
        </Route>
        <Route exact path="/Library/Wishlist">
          <LibraryWishlist />
        </Route>
      </Switch>
    </>
  );
}

// filter by number of players etc
// Set own "nickname", individualizing
// different grid options on button click
