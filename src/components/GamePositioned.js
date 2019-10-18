import React from "react";
import styled from "styled-components";
import { ImageContainer } from "./CollectionItem";

export const PositionedImageContainer = styled(ImageContainer)`
  position: absolute;
  top: -40px;
  left: 30px;
`;

<<<<<<< HEAD
export default function GamePositioned({ className, src }) {
  return <PositionedImageContainer className={className} src={src} />;
=======
export default function GamePositioned({ className }) {
  return (
    <PositionedImageContainer
      className={className}
      src="https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254200327-61EFZADvURL.jpg"
    />
  );
>>>>>>> master
}
