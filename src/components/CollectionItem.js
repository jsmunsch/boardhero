import React from "react";
import styled from "styled-components";

const ImageContainer = styled.img`
  width: 88px;
  height: 88px;
  border: 4px solid white;
  object-fit: cover;
  object-position: center center;
  border-radius: 15px;
<<<<<<< HEAD
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
=======
  box-shadow: 0px 3px 6px #00000037;
>>>>>>> master
`;

export const PositionedImageContainer = styled(ImageContainer)`
  position: absolute;
  top: -40px;
  left: 30px;
`;

export default function CollectionItem({ className }) {
  return (
    <ImageContainer
      classname={className}
      src="https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254200327-61EFZADvURL.jpg"
    />
  );
}

export function GamePositioned({ className }) {
  return (
    <PositionedImageContainer
      className={className}
      src="https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254200327-61EFZADvURL.jpg"
    />
  );
}
