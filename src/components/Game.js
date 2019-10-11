import React from "react";
import styled from "styled-components";

const ImageContainer = styled.img`
  width: 88px;
  height: 88px;
  border: 4px solid white;
  object-fit: cover;
  object-position: center center;
  border-radius: 15px;
`;

export default function Game() {
  return (
    <ImageContainer src="https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254200327-61EFZADvURL.jpg" />
  );
}
