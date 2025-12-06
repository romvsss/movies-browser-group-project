import styled from "styled-components";
import { ReactComponent as SearchIconSVG } from "./search.svg";

export const RightWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: 0;
    justify-content: center;
    width: 100%;
  }
`;

export const SearchWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  display: flex;
  align-items: center;
  background: white;
  border-radius: 33px;
  padding: 12px 24px;
  gap: 16px;
  width: 100%;
  max-width: 432px;
  height: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    padding: 10px 16px;
    gap: 8px;
    height: 44px;
    max-width: 288px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: none;
  }
`;

export const SearchIcon = styled(SearchIconSVG)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 16px;
    height: 16px;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};

  ::placeholder {
    color: ${({ theme }) => theme.colors.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 13px;
  }
`;
