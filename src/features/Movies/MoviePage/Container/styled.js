import styled from "styled-components";
import { ReactComponent as StarIcon40px } from "../shape-star.svg";

export const Container = styled.div`
width: 100%;
max-width: 1920px;
height: 770px;
/* background-image: url('/path/to/movie/poster.jpg');*/
background-size: cover;
margin-bottom: 64px;
background-image: ${({ theme }) => theme.effects.posterGradient}; 
display: flex;
align-items: flex-end;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 320px;
    width: 100%;
    height: 148px;
    margin-bottom: 16px;
}
`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${({ theme }) => theme.colors.scienceBlue};
width: auto;
height: 176px;
margin-left: 276px;
margin-bottom: 57px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    height: 51px;
    margin-bottom: 8px;
    margin-left: 16px;
}
`;

export const MovieTitle = styled.header`
width: auto;
height: 77px;
font-size: 64px;
font-weight: 600;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.white};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    height: 29px;
    font-size: 24px;
}
`;

export const TitleRatingContent = styled.div`
width: auto;
height: 40px;
margin-top: 8px;
font-size: 16px;
font-weight: 400;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.white};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    height: 18px;
    margin-top: 8px;
    font-size: 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    gap: 4px;
}
`;

export const Layout = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
font-size: 16px;
font-weight: 400;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme}) => theme.colors.white};
margin-bottom: 16px;
margin-top: 16px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
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
height: 40px;
font-size: 30px;
font-weight: 500;
line-height: 130%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.white};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
   width: auto;
   height: 18px;
   font-size: 14px;
}
`;

export const Star40px = styled(StarIcon40px)`
width: 40px;
height: 40px;
margin-right: 8px;
vertical-align: middle;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: middle;
}
`;