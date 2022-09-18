import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  
  &>div {
    flex: 1;
    
    &>p {
      margin-top: 16px;
      padding-right: 29px;
    }
  }
  @media (max-width: 950px) {
    flex-direction: column;
    &>div {
    padding: 0 10px;
    flex: 1;
    
    &>p {
      font-size: 18px;
      margin-top: 10px;
    }
  }
  }
`;
