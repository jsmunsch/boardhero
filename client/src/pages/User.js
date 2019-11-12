import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import PictureContainer from "../components/User-page.js/RoundPicture";
import AmountGames from "../components/User-page.js/AmountGames";
import { useUser } from "../hooks";
import { getGamesCollection } from "../api/fetchGames";
import compare from "../components/User-page.js/CompareFunction";
import UserNameArea from "../components/User-page.js/UserNameArea";
import { getWishlistCollection } from "../api/fetchWishlist";
import UserStatistics from "./UserStatistics";
import UserFriends from "./UserFriends";
import UserOverview from "./UserOverview";
import NameText from "../components/User-page.js/NameText";
import NavBar from "../components/User-page.js/NavBar";
import LibraryBrowse from "./LibraryBrowse";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  color: white;
`;

const TopArea = styled.section`
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default function User() {
  const [games, setGames] = useState([]);
  const [wishlistGames, setWishlistGames] = useState([]);

  React.useEffect(() => {
    getWishlistCollection().then(gameArray => {
      setWishlistGames(gameArray);
    });
  }, []);

  React.useEffect(() => {
    getGamesCollection().then(gameArray => {
      setGames(gameArray);
    });
  }, []);

  const filteredGames = games.sort(compare);
  const [user] = useUser();
  let history = useHistory();

  return (
    <Container>
      <Header
        page="User"
        toggleSearchbar={() => {
          history.push("/library/browse");
        }}
      />
      <TopArea>
        <PictureContainer src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
        <AmountGames name={games.length} description="Games" />
        <AmountGames name={wishlistGames.length} description="Wishlist" />
      </TopArea>
      <UserNameArea>
        <NameText name={user} description="Playing smart since October 19'" />
        <span />
        <span />
      </UserNameArea>
      <NavBar />
      <Switch>
        <Route exact path="/user/overview">
          <UserOverview filteredGames={filteredGames} games={games} />
        </Route>
        <Route exact path="/user/statistics">
          <UserStatistics games={games} />
        </Route>
        <Route exact path="/user/friends">
          <UserFriends />
        </Route>
      </Switch>
    </Container>
  );
}
