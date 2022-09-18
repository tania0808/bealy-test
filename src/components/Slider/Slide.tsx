import { Children } from "react";
import styled, { keyframes } from "styled-components";
interface Props {
  children: JSX.Element;
}

const Slide = ({ children }: Props) => {
  return <SlideS>{children}</SlideS>;
};

const SlideS = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  padding: 15px;
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


export default Slide;
