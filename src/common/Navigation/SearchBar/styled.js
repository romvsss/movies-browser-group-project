import styled from "styled-components";
import { ReactComponent as SearchIconSVG } from "./search.svg";

export const RightWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
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
`;

export const SearchIcon = styled(SearchIconSVG)`
  width: 24px;
  height: 24px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};

  ::placeholder {
    color: ${({ theme }) => theme.colors.waterloo};
  }
`;
