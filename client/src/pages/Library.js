import React, { useState } from "react";
import Header from "../components/Header";
import LibraryNav from "../components/LibraryNav";
import OptionBox from "../components/OptionBox";
import SortModal from "../components/SortModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LibraryCollection from "./LibraryCollection";
import LibraryBrowse from "./LibraryBrowse";
import LibraryWishlist from "./LibraryWishlist";

export default function Library() {
  const [currentNavigation, setCurrentNavigation] = useState("");
  const [toggleOptions, setToggleOptions] = useState(false);
  const [displaySort, setDisplaySort] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [inputValue, setInputValue] = React.useState("");

  function handleSearch(value) {
    setInputValue(value);
  }

  return (
    <>
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
          <LibraryCollection inputValue={inputValue} />
        </Route>
        <Route exact path="/Library/Browse">
          <LibraryBrowse inputValue={inputValue} />
        </Route>
        <Route exact path="/Library/Wishlist">
          <LibraryWishlist inputValue={inputValue} />
        </Route>
      </Switch>
    </>
  );
}

// filter by number of players etc
// Set own "nickname", individualizing
// different grid options on button click
