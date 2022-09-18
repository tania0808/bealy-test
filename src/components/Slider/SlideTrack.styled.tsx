import styled, { keyframes } from "styled-components";

const scroll = keyframes`
0% {
    transform: translateX(0);
}
100% {
    transform: translateX(calc(-150px * 9));
}
`;

export const SlideTrack = styled.div`
  display: flex;
  width: calc(150px * 18);
  animation: ${scroll} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

