import React, { useState } from "react";
import Header from "../components/Header";
import LibraryNav from "../components/LibraryNav";
import CollectionGrid from "../components/CollectionGrid";
import CollectionItem from "../components/CollectionItem";
import OptionBox from "../components/OptionBox";
import SortModal from "../components/SortModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BrowseEmpty from "../components/BrowseEmpty";
import gameCollection from "../api/collectionData";
import gameWishlist from "../api/wishlistData";
import browseData from "../api/fakedata";

export default function Library() {
  const [navigation, setNavigation] = useState("");
  const [options, setOptions] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [textInput, setTextInput] = React.useState(null);
  let empty = textInput;
  console.log(empty);
  console.log(textInput);
  return (
    <>
      <Header
        toggleOptions={() => setOptions(!options)}
        toggleSearchbar={() => setVisibility(!visibility)}
        active={visibility}
        handleInputChange={setTextInput}
      />
      <OptionBox show={options} onClick={() => setShowSort(!showSort)} />
      <SortModal show={showSort} />
      <LibraryNav selected={navigation} onNavigationChange={setNavigation} />
      <Switch>
        <Route exact path="/Library/Collection">
          <CollectionGrid>
            {gameCollection.map(game => (
              <CollectionItem
                key={game.id}
                onClick={() => console.log(game)}
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
              {browseData.map(game => (
                <CollectionItem
                  key={game.id}
                  onClick={() => console.log(game)}
                  src={game.image_url}
                />
              ))}
            </CollectionGrid>
          )}
        </Route>
        <Route exact path="/Library/Wishlist">
          <CollectionGrid>
            {gameWishlist.map(game => (
              <CollectionItem
                key={game.id}
                onClick={() => console.log(game.description)}
                src={game.image_url}
              />
            ))}
          </CollectionGrid>
        </Route>
      </Switch>
    </>
  );
}
