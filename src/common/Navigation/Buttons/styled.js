import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin-left: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-left: auto;
    justify-content: center;
    gap: 12px;
  }
`;

export const StyledButton = styled(NavLink)`
  background: none;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  padding: 13.5px 24px;
  gap: 5px;
  line-height: 100%;

  &.active  {
    border: 2px solid ${({ theme }) => theme.colors.white};
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 12px;
    padding: 12px 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    padding: 10px 12px;

    &.active  {
      border: 1px solid ${({ theme }) => theme.colors.white};
    }
  }
`;
