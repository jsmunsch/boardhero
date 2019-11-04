import styled from "styled-components";
import { ImageContainer } from "../library/CollectionItem";

export const GamePositioned = styled(ImageContainer)`
  position: absolute;
  top: -55px;
  left: 100px;
  height: 120px;
  width: 120px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`;

export default GamePositioned;
