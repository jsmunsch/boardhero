import React from "react";
import styled from "styled-components";
import { ImageContainer } from "./CollectionItem";

export const PositionedImageContainer = styled(ImageContainer)`
  position: absolute;
  top: -40px;
  left: 30px;
`;

export default function GamePositioned({ className, src }) {
  return <PositionedImageContainer className={className} src={src} />;
}