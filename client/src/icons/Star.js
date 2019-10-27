import React from "react";
import styled from "styled-components";

function StarIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
    </svg>
  );
}

const StarIconStyled = styled(StarIcon)`
  fill: ${props =>
    props.selected ? props.theme.lightFont : props.theme.darkFont};
  height: 32px;
  width: 32px;
  margin-right: 5px;
`;

export default function Star({ selected }) {
  return <StarIconStyled selected={selected} />;
}
