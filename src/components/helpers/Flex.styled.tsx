import styled from "styled-components";

interface IFlex {
  padding?:string
  direction?:string
}

export const Flex = styled.div<IFlex>`
  display: flex;
  align-items: center;
  flex-direction: ${({direction}) => direction ? direction : 'row'};
  justify-content: space-between;
  margin-top: 1rem;
  
  &>div {
    flex: 1;

    & > img {
      object-fit: contain;
      max-width: 510px;
      width: 100%;
      padding: ${({padding}) => padding ? padding : '0'};
    }
    
    &>p {
      margin-top: 16px;
      padding-right: 29px;
      color: ${({ theme}) => theme.colors.black_700};

    }
  }
  @media (max-width: 950px) {
    flex-direction: column;
    &>div {
    padding: 0 10px;
    flex: 1;
    
    p {
      font-size: 18px;
      margin-top: 10px;
    }
  }
  }
`;
