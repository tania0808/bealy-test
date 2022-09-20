import styled from "styled-components";
import { FlexItem } from "./Utils.styled";
interface IFlex {
  padding?:string
  direction?:string
  margin?:string
  gap?:string
  justify?: string
  align?: string
  mobileDirection?: string
}

export const Flex = styled(FlexItem)<IFlex>`
  flex-direction: ${({direction}) => direction ? direction : 'row'};
  justify-content: ${({ justify }) => justify || "space-between"};
  align-items: ${({ align }) => align || "center"};
  margin-top: ${({margin}) => margin ? margin : '1rem'};
  gap: ${({ gap }) => gap};

  &>div {
    flex: 1;
    padding: ${({ padding }) => padding};
  }

  @media (max-width: 950px) {
    flex-direction: ${({mobileDirection}) => mobileDirection ? mobileDirection : 'column'};
  }
  
`;
