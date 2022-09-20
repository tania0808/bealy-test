import styled from "styled-components";
import { FlexItem } from "./Utils.styled";
interface IFlex {
  padding?:string
  direction?:string
}

export const Flex = styled(FlexItem)<IFlex>`
  flex-direction: ${({direction}) => direction ? direction : 'row'};
  justify-content: space-between;
  margin-top: 1rem;
  
  &>div {
    flex: 1;
  }

  @media (max-width: 950px) {
    flex-direction: column;
  }
  
`;
