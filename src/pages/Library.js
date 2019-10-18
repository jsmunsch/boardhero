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
import { getAsyncWishlistGames } from "../api/WishlistCollection";
import { getAsyncCollectionGames } from "../api/GameCollection";

export default function Library() {
  const [navigation, setNavigation] = useState("");
  const [options, setOptions] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [textInput, setTextInput] = React.useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectGame, setSelectGame] = useState();
  const [browseGame, setBrowseGame] = useState([]);
  const [wishlistGame, setWishlistGame] = useState([]);
  const [collectionGame, setCollectionGame] = useState([]);

  React.useEffect(() => {
    getAsyncBrowseGames().then(gameArray => {
      setBrowseGame(gameArray);
    });
  }, [textInput]);
  console.log(browseGame);

  React.useEffect(() => {
    getAsyncWishlistGames().then(gameArray => {
      setWishlistGame(gameArray);
    });
  }, [textInput]);
  console.log(wishlistGame);
  React.useEffect(() => {
    getAsyncCollectionGames().then(gameArray => {
      setCollectionGame(gameArray);
    });
  }, [textInput]);
  console.log(collectionGame);

  const searchCollectionGames = collectionGame.filter(info =>
    info.name.toLowerCase().includes(textInput.toLowerCase())
  );
  const searchWishlistGames = wishlistGame.filter(info =>
    info.name.toLowerCase().includes(textInput.toLowerCase())
  );
  const searchBrowseGames = browseGame.filter(info =>
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
