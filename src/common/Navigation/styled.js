import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 0 23px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 24px 16px 16px 16px;
  }
`;

export const NavigationWrapper = styled.nav`
  max-width: 1368px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 0;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 19px;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    justify-content: center;
    align-items: stretch;
    width: 100%;
  }
`;
