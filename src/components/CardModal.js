import React from "react";
import styled from "styled-components";
import Game from "./Game";

const StyledDiv = styled.div`
  width: 320px;
  height: 480px;
  background: white;
  position: relative;
`;

export default function CardModal({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

// export function CardImage({ className }) {
//   return (
//     <StyledDiv>
//       <StyledImage className={className} />
//     </StyledDiv>
//   );
// }
