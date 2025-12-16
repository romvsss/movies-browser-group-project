import styled, { css } from "styled-components";
import { ReactComponent as VectorSvg } from "../../images/vector.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 103px 0;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
    margin: 32px 0 31px 0;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.pattensBlue};
  color: ${({ theme }) => theme.colors.scienceBlue};
  cursor: pointer;
  transition: 0.2s;

  &:disabled {
    background: ${({ theme }) => theme.colors.mystic};
    color: ${({ theme }) => theme.colors.waterloo};
    cursor: default;
  }

  &:hover:not(:disabled) {
    filter: brightness(105%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px 12px;
    gap: 4px;
  }
`;

export const ButtonText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const PageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 2px;
    font-size: 10px;
  }
`;

export const Number = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
  }
`;

// Obsługa strzałek (obracanie dla "Next" i "Last")
export const Arrow = styled(VectorSvg)`
  path {
    fill: ${({ theme, disabled }) => 
      disabled ? theme.colors.waterloo : theme.colors.scienceBlue};
  }

  ${({ rotated }) => rotated && css`
    transform: rotate(180deg);
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 5px;
    height: 8px;
  }
`;