import styled from "styled-components";

const activeClassName = "active";

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 40px;
`;

export const StyledButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid transparent;
  border-radius: 24px;
  padding: 8px 24px;
  gap: 5px;

   &.${activeClassName} {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  &:hover {
    cursor: pointer;
  }
  `;