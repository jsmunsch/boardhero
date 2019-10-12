import React from "react";
import styled from "styled-components";

const BodyGrid = styled.div`
  width: 320px;
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  background-color: ${props => props.theme.main};
`;

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.main};
  padding: 30px;
`;
export default function CollectionGrid({ children, selected, onClick }) {
  return (
    <WrapperDiv>
      <BodyGrid>{children}</BodyGrid>
    </WrapperDiv>
  );
}
