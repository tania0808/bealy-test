import styled from "styled-components";
import { FlexItem } from "../helpers/Flex.styled"; 

export const PreHeader = styled(FlexItem)`
  & > p {
    color: ${({ theme }) => theme.colors.black_700};
    font-family: "Gilroy";
  }

  & > img {
    margin-right: 1rem;
  }
`;
