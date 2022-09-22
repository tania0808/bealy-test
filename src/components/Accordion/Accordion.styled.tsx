import styled from "styled-components";

export const Image = styled.div`
  max-width: 100%;
  margin: 40px 0 64px;

  & > img {
    width: 100%;
    margin: 0 auto;
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  & > p {
    color: ${({ theme }) => theme.colors.black_600};
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  }
`;