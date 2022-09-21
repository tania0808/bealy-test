import styled, { keyframes } from "styled-components";
import { FlexItem } from "../helpers/Utils.styled";

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

export const Slider = styled.div`
  height: 250px;
  margin: auto;
  position: relative;
  width: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

export const Slide = styled(FlexItem)`
  width: 150px;
  height: 200px;
  padding: 20px;
  perspective: 100px;

  & > img {
    width: 100%;
    transition: transform 0.5s;
    object-fit: contain;
  }
  
  &:hover {
    img {
      transform: translateZ(20px);
    }
  }
`;