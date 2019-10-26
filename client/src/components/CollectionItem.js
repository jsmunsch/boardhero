import React from "react";
import styled from "styled-components";

export const ImageContainer = styled.img`
  width: 88px;
  height: 88px;
  border: 4px solid white;
  object-fit: cover;
  object-position: center center;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`;

export default function CollectionItem({ game, src, onClick, className }) {
  return (
    <ImageContainer
      classname={className}
      onClick={onClick}
      src={src}
      game={game}
    />
  );
}
