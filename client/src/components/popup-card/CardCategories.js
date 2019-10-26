import React from "react";
import styled from "styled-components";

const BadgeContainer = styled.div`
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 12px;
`;

export default function CardCategories({ children }) {
  return <BadgeContainer>{children}</BadgeContainer>;
}
