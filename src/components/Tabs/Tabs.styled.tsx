import styled from "styled-components";

export const TabMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-left: 1px solid #d5d5d5;
  margin-top: 26px;
`;

interface ITabItem {
  activeId: number;
  tabId: number;
}
export const TabItem = styled.div<ITabItem>`
  margin-top: 10px;
  padding-left: 16px;
  border-left: 3px solid transparent;
  ${(props) => {
    if (props.tabId === props.activeId) {
      return `
      
    border-left: 3px solid #1B1B1E;
      `;
    } else {
      return `
        opacity: 0.2;
      `;
    }
  }}

  & > h5 {
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.black_800};
  }
  & > p {
    color: ${({ theme }) => theme.colors.black_600};
  }
`;
