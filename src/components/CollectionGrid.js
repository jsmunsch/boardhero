import React from "react";
import styled from "styled-components";

const BodyGrid = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  background-color: ${props => props.theme.main};
`;

export default function CollectionGrid({ children }) {
  return <BodyGrid>{children}</BodyGrid>;
}
