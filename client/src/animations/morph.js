import { keyframes } from "styled-components";

export const morph = keyframes`
0% { transform: translateX(-100%)}
100% { transform: translateX(0)}
`;

export const morphAway = keyframes`
0% { transform: translateX(0)}
100% { transform: translateX(-100%)}
`;
