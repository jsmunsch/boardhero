import React, { useState } from "react";
import Header from "../components/Header";
import LibraryNav from "../components/library/LibraryNav";
import OptionBox from "../components/library/OptionBox";
import SortModal from "../components/library/SortModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LibraryCollection from "./LibraryGames";
import LibraryBrowse from "./LibraryBrowse";
import LibraryWishlist from "./LibraryWishlist";
import { useLocation } from "react-router-dom";

export default function Library() {
  let location = useLocation();

  const [currentNavigation, setCurrentNavigation] = useState(location.pathname);
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
        toggleOptions={() => setToggleOptions(false)}
        toggleSearchbar={() => setShowSearchbar(!showSearchbar)}
        active={showSearchbar}
        handleInputChange={setSearchbarInput}
        onSearch={handleSearch}
        page="Library"
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
