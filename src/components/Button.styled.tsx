import styled from "styled-components";

interface Button {
  bg?: string;
}

export const Button = styled.button<Button>`
  height: 34px;
  border: 1px solid #1b1b1b;
  color: #1b1b1b;
  background-color: #fff;
  border-radius: 6px;
  padding: 0 10px;

  ${(props) =>
    props.bg === "black" &&
    `
  background-color: #1B1B1B;
  color: #fff
  `}
`;
