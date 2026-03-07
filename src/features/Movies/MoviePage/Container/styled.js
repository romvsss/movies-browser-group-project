import styled from "styled-components";
import { ReactComponent as StarIcon40px } from "../../../../images/shape-star.svg";

export const BackgroundPoster = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100vw;
  height: 770px;
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    height: 600px;
    margin-bottom: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    height: 450px;
    margin-bottom: 43px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 300px;
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileSMax}px) {
    height: 148px;
    margin-bottom: 16px;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 1368px;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  filter: brightness(70%);
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.effects.posterGradient};
  z-index: 1;
  pointer-events: none;
`;

export const TitleContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  max-width: 1368px;
  width: 100%;
  padding: 0 24px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    padding: 0 24px;
    bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 16px;
    bottom: 16px;
  }
`;

export const MovieTitle = styled.header`
  width: auto;
  font-size: 64px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.white};
  align-self: flex-start;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    font-size: 24px;
  }
`;

export const TitleRatingContent = styled.div`
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 14px;
    margin-top: 16px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    margin-top: 8px;
    gap: 4px;
  }
`;

export const Votes = styled.div`
  width: auto;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) =>theme.breakpoints.tabletHorizontalMax}px) {
    color: ${({ theme }) => theme.colors.white};
    align-self: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    font-size: 10px;
  }
`;

export const Layout = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 16px;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 4px;
    font-size: 10px;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const TitleRating = styled.div`
  width: auto;
  font-size: 30px;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    align-self: center;
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    font-size: 14px;
  }
`;

export const Star40px = styled(StarIcon40px)`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    width: 24px;
    height: 24px;
    margin-right: 6px;
    margin-bottom: 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: middle;
  }
`;
