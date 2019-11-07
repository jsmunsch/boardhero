import React, { useState, useEffect } from "react";
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

const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex-grow: 1;
  max-height: 50%;
`;

const Title = styled.div`
  display: flex;
  font-size: 1.3em;
  margin-top: 20px;
  justify-content: flex-start;
  margin-left: 8%;
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
        <StyledLink>Overview</StyledLink>
        <StyledLink>Statistics</StyledLink>
        <StyledLink>Friends</StyledLink>
      </ScrollBar>
      <MainContent>
        <Title>
          <span>Recently Added</span>
        </Title>
        {filteredGames &&
          filteredGames
            .slice(0, 5)
            .map(game => (
              <RecentlyAdded
                key={game.id}
                src={game.image_url}
                name={game.name}
                description={game.id}
              />
            ))}
      </MainContent>
    </Container>
  );
}
