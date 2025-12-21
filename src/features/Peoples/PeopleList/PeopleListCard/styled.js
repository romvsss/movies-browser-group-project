import { Link } from "react-router-dom";
import styled from "styled-components";

export const PeopleTile = styled(Link)`
  text-decoration: none;
  color: inherit;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.effects.tileShadow};
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 2.08 / 3.39;

  &:hover {
    cursor: pointer;
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.effects.tileShadowHover};
  }

  &:active {
    filter: brightness(110%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    aspect-ratio: 1.36 / 2.45;
    padding: 8px;
    gap: 8px;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileMax + 1}px) {
    aspect-ratio: 1.76 / 2.31;
    object-position: center top;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    aspect-ratio: 1.2 / 1.78;
  }
`;

export const PhotoPlaceholder = styled.div`
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
  width: 100%;
  aspect-ratio: 1.76 / 2.31;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50%;
    height: auto;
    opacity: 0.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    aspect-ratio: 1.2 / 1.78;
  }
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.woodsmoke};
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;
