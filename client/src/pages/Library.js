import React, { useState } from "react";
import Header from "../components/Header";
import LibraryNav from "../components/LibraryNav";
import OptionBox from "../components/OptionBox";
import SortModal from "../components/SortModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LibraryCollection from "./libraryGames";
import LibraryBrowse from "./libraryBrowse";
import LibraryWishlist from "./libraryWishlist";

export default function Library() {
  const [currentNavigation, setCurrentNavigation] = useState("");
  const [toggleOptions, setToggleOptions] = useState(false);
  const [displaySort, setDisplaySort] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [searchbarInput, setSearchbarInput] = React.useState("");

  function handleSearch(value) {
    setSearchbarInput(value);
  }

  return (
    <>
      <Header
        toggleOptions={() => setToggleOptions(!toggleOptions)}
        toggleSearchbar={() => setShowSearchbar(!showSearchbar)}
        active={showSearchbar}
        handleInputChange={setSearchbarInput}
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
        <Route exact path="/library/games">
          <LibraryCollection searchbarInput={searchbarInput} />
        </Route>
        <Route exact path="/library/browse">
          <LibraryBrowse searchbarInput={searchbarInput} />
        </Route>
        <Route exact path="/library/wishlist">
          <LibraryWishlist searchbarInput={searchbarInput} />
        </Route>
      </Switch>
    </>
  );
}

// filter by number of players etc
// Set own "nickname", individualizing
// different grid options on button click
