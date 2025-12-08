import styled from "styled-components";
import { ReactComponent as StarSvg } from "./shape-star.svg";

export const MovieTile = styled.div`
  margin: 30px 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.effects.tileShadow};
  width: 324px;
  height: 650px;
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
`;

export const HeaderContainer = styled.div`
  width: 292px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  margin-top: 16px;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
`;

export const Year = styled.p`
  color: ${({ theme }) => theme.colors.waterloo};
  margin: 0;
  margin-top: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`;
export const GenreButtons = styled.div`
  width: 292px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;

export const GenreButton = styled.p`
  background-color: ${({ theme }) => theme.colors.mystic};
  margin: 0;
  margin-top: 8px;
  border-radius: 5px;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
`;
export const RatingContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  margin-top: auto;
  margin-left: 0px;
  margin-bottom: 0px;
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
