import styled from "styled-components";
import { ImageContainer } from "../library/CollectionItem";

export const GamePositioned = styled(ImageContainer)`
  position: absolute;
  top: -60px;
  margin-top: 0;
  left: 50%;
  margin-left: -50px;
  height: 120px;
  width: 120px;
  @media (min-width: 600px) {
    width: 120px;
    height: 120px;
    margin-left: -60px;
  }
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`;

export default GamePositioned;
