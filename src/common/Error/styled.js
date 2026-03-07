import styled from "styled-components";
import { ReactComponent as DangerIcon } from "../../images/danger.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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

export const Button = styled(Link)`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0055ffff;
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.effects.tileShadowHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 12px 20px;
    font-size: 12px;
  }
`;