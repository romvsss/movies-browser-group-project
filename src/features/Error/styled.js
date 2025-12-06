import styled from "styled-components";
import { ReactComponent as DangerIcon } from "./danger.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 180px;
  padding: 0 20px;
`;

export const Icon = styled(DangerIcon)`
  width: 120px;
  height: 120px;
  margin-bottom: 24px;
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
  }
`;

export const Paragraph = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.colors.black};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.02);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 12px 20px;
    font-size: 12px;
  }
`;