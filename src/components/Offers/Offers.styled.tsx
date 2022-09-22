import styled from "styled-components";


export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.bright_grey};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 0 24px;
`;
