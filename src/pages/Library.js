import React, { useState } from "react";
import Header from "../components/Header";
import LibraryNav from "../components/LibraryNav";
import CollectionGrid from "../components/CollectionGrid";
import CollectionItem from "../components/CollectionItem";
import OptionBox from "../components/OptionBox";
import SortModal from "../components/SortModal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BrowseEmpty from "../components/BrowseEmpty";
import gameCollection from "../api/CollectionData";
import gameWishlist from "../api/WishlistData";
import browseData from "../api/FakeData";
import CardModal from "../components/CardModal";

export default function Library() {
  const [navigation, setNavigation] = useState("");
  const [options, setOptions] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [textInput, setTextInput] = React.useState("");
  const [showModal, setShowModal] = useState(false);

  const searchContent = browseData.filter(info =>
    info.name.toLowerCase().includes(textInput.toLowerCase())
  );

  function handleSearch(value) {
    setTextInput(value);
  }
  return (
    <>

      {showModal && (
        <CardModal handleOutsideClick={() => setShowModal(false)} />
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
            {gameCollection.map(game => (
              <CollectionItem
                key={game.id}
                onClick={() => setShowModal(true)}
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
              {searchContent.map(game => (
                <CollectionItem
                  key={game.id}
                  onClick={() => setShowModal(!showModal)}
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
