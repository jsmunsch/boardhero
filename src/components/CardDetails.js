import React from "react";
import styled from "styled-components";

const CardDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 90%;
  height: 80%;
  margin-top: 20px;
  background-color: inherit;
  font-size: 20px;
`;

export default function CardDetails({ children }) {
  return <CardDetailsContainer>{children}</CardDetailsContainer>;
}
