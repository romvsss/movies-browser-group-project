import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../images/shape-star.svg";

export const Wrapper = styled.div`
width: auto;
height: auto;
margin: 0;
`;

export const PersonSection = styled.section`
max-width: 1368px;
height: auto;
margin: 0 auto;
margin-bottom: 64px;

@media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) { 
    max-width: 1136px;
    height: auto;
    margin-bottom: 48px;
}

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: 292px;
    height: auto;
    margin-bottom: 32px;
}
`;

export const Header = styled.header`
width: auto;
height: 43px;
margin-bottom: 24px;
font-size: 36px;
font-weight: 600;
line-height: 120%;
letter-spacing: 0px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: 24px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
}
`;

export const TileSection = styled.div`
display: grid;
grid-template-columns: repeat(4, 324px);
grid-gap: 24px;
margin-bottom: 64px;
justify-content: center;

@media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) { 
    grid-template-columns: repeat(3, 324px);
    grid-gap: 16px;
    margin-bottom: 48px;
};

@media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) { 
    grid-template-columns: repeat(2, 324px);
    grid-gap: 16px;
    margin-bottom: 32px;
};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    grid-template-columns: 288px;
    grid-gap: 16px;
    margin-bottom: 32px;
}
`;

export const Tile = styled.div`
  max-width: 324px;
  width: auto;
  height: auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) { 
    max-width: 324px;
    height: auto;
};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    max-width: 324px;
    height: auto;
};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: grid;
    width: 288px;
    height: auto;
    grid-template-columns: 120px 1fr;
    grid-template-rows: auto;
    grid-gap: 8px;
    grid-template-areas: "poster movie";
    align-items: start;
  }
`;

export const TileImage = styled.div`
  width: 292px;
  height: 434px;
  border-radius: 5px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.colors.waterloo};

  img {
    width: 100%;
    height: auto;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 114px;
    height: 169px;
    margin-bottom: 0;
    grid-area: poster;
  }
`;

export const MovieTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex: 1;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-area: movie;
    flex: unset;
  }
`;

export const Title = styled.header`
width: auto;
height: auto;
font-size: 22px;
font-weight: 500;
line-height: 130%;
letter-spacing: 0px;
margin-bottom: 8px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    font-size: 16px;
    margin-bottom: 4px;
    grid-area: title;
}
`;

export const Year = styled.div`
width: auto;
height: 24px;
font-size: 16px;
font-weight: 400;
line-height: 150%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.Darkergrey};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    height: 17px;
    font-size: 13px;
    line-height: 130%;
    grid-area: year;
}
`;

export const Tags = styled.ul`
width: auto;
height: auto;
display: flex;
flex-wrap: wrap;
flex-direction: row;
gap: 8px;
padding-inline-start: 0;
list-style: none;
margin-top: 16px;
margin-bottom: 8px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: auto;
    gap: 4px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    grid-area: tags;
    }
`;

export const Tag = styled.li`
width: auto;
height: 36px;
background-color: ${({ theme }) => theme.colors.mystic};
padding: 8px 16px;
border-radius: 5px;
font-size: 14px;
font-weight: 400;
line-height: 140%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: 19px;
    padding: 4px 8px;
    border-radius: 5px;
    font-size: 10px;
}
`;

export const RatingContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  margin-top: auto; 

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 4px; 
    font-size: 13px;
  }
`;

export const Rating = styled.div`
width: auto;
height: 24px;
font-size: 16px;
font-weight: 600;
line-height: 150%;
letter-spacing: 0px;

color: ${({ theme }) => theme.colors.black};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: auto;
    font-size: 13px;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: 0px;
    margin-right: 4px;
    display: flex;
    align-items: center;
}
`;

export const Star = styled(StarIcon)`
width: 24px;
height: 24px;
margin-right: 8px;
vertical-align: middle;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: middle;
}
`;