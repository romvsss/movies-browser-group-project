import styled from "styled-components";
import { ReactComponent as StarSvg } from "../../../../images/shape-star.svg";

export const MovieTile = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.effects.tileShadow};
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  height: 100%;

  &:hover {
    cursor: pointer;
    transform: translateY(-1px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileMax + 1}px) {
    min-height: 650px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    min-width: 288px;
    max-height: 201px;
    width: 100%;
    display: grid;
    grid-template-columns: 114px 1fr;
    gap: 16px;
    align-items: start;
  }
`;

export const Poster = styled.img`
  aspect-ratio: 2.92 / 4.34;
  width: 100%;
  border-radius: 5px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileMax + 1}px) {
    aspect-ratio: 2.92 / 4.34;
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 116px;
    height: 169px;
  }
`;

export const PosterPlaceholder = styled.div`
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
  width: 100%;
  aspect-ratio: 2.92 / 4.34;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50%;
    height: auto;
    opacity: 0.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 116px;
    height: 169px;

    svg {
      width: 48px;
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
  flex: 1 1 auto;
  min-height: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 0px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 0px;
    font-size: 16px;
  }
`;

export const Year = styled.p`
  color: ${({ theme }) => theme.colors.waterloo};
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 4px;
    font-size: 13px;
    line-height: 150%;
  }
`;
export const GenreButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 126px;
    column-gap: 8px;
  }
`;

export const GenreButton = styled.button`
  background-color: ${({ theme }) => theme.colors.mystic};
  border: none;
  margin: 0;
  border-radius: 5px;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  &:hover {
    filter: brightness(107%);
    box-shadow: ${({ theme }) => theme.effects.tileShadow};
    cursor: pointer;
  }

  &:active {
    filter: brightness(110%);
    box-shadow: ${({ theme }) => theme.effects.tileShadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 110%;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  margin-top: auto;
  margin-left: 0px;
  margin-bottom: 0px;
  height: 100%;
`;

export const Star = styled(StarSvg)`
  width: 24px;
  height: 24px;
`;

export const Rate = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 0px;
`;

export const Votes = styled.p`
  color: ${({ theme }) => theme.colors.waterloo};
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 0px;
`;
