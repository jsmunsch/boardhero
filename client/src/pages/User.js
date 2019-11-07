import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import PictureContainer from "../components/User-page.js/RoundPicture";
import AmountGames from "../components/User-page.js/AmountGames";
import StyledLink from "../components/User-page.js/UserNavigation";
import RecentlyAdded from "../components/User-page.js/RecentlyAdded";
import { useUser } from "../hooks";
import { getGamesCollection } from "../api/fetchGames";
import compare from "../components/User-page.js/CompareFunction";
import UserNameArea from "../components/User-page.js/UserNameArea";
import { getWishlistCollection } from "../api/fetchWishlist";
import UserStatistics from "./UserStatistics";
import UserFriends from "./UserFriends";
import UserOverview from "./UserOverview";

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

const ScrollBar = styled.div`
  display: flex;
  height: 8%;
  overflow-x: auto;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid ${props => props.theme.brightEffect};
  border-bottom: 1px solid ${props => props.theme.brightEffect};
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
  let { url } = useRouteMatch();
  return (
    <Container>
      <Header />
      <TopArea>
        <PictureContainer src="https://avatarsed1.serversdev.getgo.com/2205256774854474505_medium.jpg" />
        <AmountGames name={games.length} description="Games" />
        <AmountGames name={wishlistGames.length} description="Wishlist" />
      </TopArea>
      <UserNameArea>
        <AmountGames name={user} description="Playing smart since 2015" />
        <span />
        <span />
      </UserNameArea>
      <ScrollBar>
        <StyledLink to={`${url}/overview`}>Overview</StyledLink>
        <StyledLink to={`${url}/statistics`}>Statistics</StyledLink>
        <StyledLink to={`${url}/friends`}>Friends</StyledLink>
      </ScrollBar>
      <Switch>
        <Route exact path="/user/overview">
          <UserOverview filteredGames={filteredGames} />
        </Route>
        <Route exact path="/user/statistics">
          <UserStatistics />
        </Route>
        <Route exact path="/user/friends">
          <UserFriends />
        </Route>
      </Switch>
    </Container>
  );
}
