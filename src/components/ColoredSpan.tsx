import styled from "styled-components";

export const ColoredSpan = styled.span`
  color: ${({theme, color}) =>color ? color : theme.colors.primary_red};
  font-weight: 700;
  padding-left: 5px;
`;
