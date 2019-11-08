import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

  return (
    <Container>
      <Header />
      <TopArea>
        <PictureContainer src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78zVsh02EAe_AqYX-lLKW3umGxLzasjAzyOqy3WWEfXLzV4wShQ&s" />
        <AmountGames name={games.length} description="Games" />
        <AmountGames name={wishlistGames.length} description="Wishlist" />
      </TopArea>
      <UserNameArea>
        <NameText name={user} description="Playing smart since 2015" />
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
