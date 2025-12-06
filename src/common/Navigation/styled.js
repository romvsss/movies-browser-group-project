import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 0 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 24px 16px 16px 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    justify-content: center;
    width: 100%;
  }
`;
