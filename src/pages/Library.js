import React, { useState } from "react";
import Header from "../components/Header";
import LibraryNav from "../components/LibraryNav";
import CollectionGrid from "../components/CollectionGrid";
import CollectionItem from "../components/CollectionItem";
import OptionBox from "../components/OptionBox";
import SortModal from "../components/SortModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BrowseEmpty from "../components/BrowseEmpty";

export default function Library() {
  const [navigation, setNavigation] = useState("");
  const [options, setOptions] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const CollectionArray = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16
  ];
  const WishlistArray = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <Header toggleOptions={() => setOptions(!options)} />
      <OptionBox show={options} onClick={() => setShowSort(!showSort)} />
      <SortModal show={showSort} />
      <LibraryNav selected={navigation} onNavigationChange={setNavigation} />
      <Switch>
        <Route exact path="/Library/Collection">
          <CollectionGrid>
            {CollectionArray.map(index => (
              <CollectionItem
                key={index}
                onClick={() => console.log("Spiel Nummer " + index)}
              />
            ))}
          </CollectionGrid>
        </Route>
        <Route exact path="/Library/Browse">
          <BrowseEmpty>
            Please use the searchbar to browse through our available games.
          </BrowseEmpty>
        </Route>
        <Route exact path="/Library/Wishlist">
          <CollectionGrid>
            {WishlistArray.map(index => (
              <CollectionItem
                key={index}
                onClick={() => console.log("Spiel Nummer " + index)}
              />
            ))}
          </CollectionGrid>
        </Route>
      </Switch>
    </>
  );
}
