import React from "react";
import styled from "styled-components";

const CardTitleContainer = styled.div`
  font-size: 22px;
  color: black;
  width: 100%;
  margin: 10px 20px;
  border-bottom: 0.5px solid black;
`;

export default function CardTitle({ children }) {
  return <CardTitleContainer>{children}</CardTitleContainer>;
}
