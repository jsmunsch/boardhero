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
  const [selectGame, setSelectedGame] = useState();
  const [boolean, setBoolean] = useState(false);

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
          <LibraryBrowse currywurst={inputValue} />
        </Route>
        <Route exact path="/Library/Wishlist">
          <LibraryWishlist currywurst={inputValue} />
        </Route>
      </Switch>
    </>
  );
}

// filter by number of players etc
// Set own "nickname", individualizing
// different grid options on button click
