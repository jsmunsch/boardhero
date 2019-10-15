import React from "react";
import styled from "styled-components";

const CardTitleContainer = styled.div`
<<<<<<< HEAD
  font-size: 22px;
=======
  font-size: 1.4em;
>>>>>>> master
  color: black;
  width: 100%;
  margin: 10px 20px;
  border-bottom: 0.5px solid black;
`;

export default function CardTitle({ children }) {
  return <CardTitleContainer>{children}</CardTitleContainer>;
}
