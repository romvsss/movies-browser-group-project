import styled from "styled-components";

const activeClassName = "active";

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: auto;
    justify-content: center;
  }
`;

export const StyledButton = styled.button`
  background: none;
  border: 1px solid transparent;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  padding: 8px 24px;
  gap: 5px;

  &.${activeClassName} {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;
