import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  margin: 20px;
  color: white;
  flex-direction: column;
`;

export default function Impressum() {
  return (
    <>
      <Header />
      <Section>
        <h1>Impressum</h1>
        <a href="https://www.vecteezy.com/free-vector/videogame">
          Videogame Vectors by Vecteezy
        </a>
        <a href="https://www.iconfinder.com/icons/4043232/avatar_batman_comics_hero_icon">
          Batman Icon by Laura Reen
        </a>
      </Section>
    </>
  );
}
