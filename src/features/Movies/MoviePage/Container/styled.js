import styled from "styled-components";
import { ReactComponent as StarIcon40px } from "../../../../images/shape-star.svg";

export const BackgroundPoster = styled.div`
background-color: ${({ theme }) => theme.colors.black};
width: 100vw;
height: 770px;
display: flex;
justify-content: center;
margin-bottom: 64px;

@media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    height: 600px;
    margin-bottom: 48px;
};

@media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    height: 450px;
    margin-bottom: 43px;
};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 148px;
    margin-bottom: 16px;
}
`;

export const Container = styled.div`
width: 100%;
max-width: 1920px;
height: 770px;
background-image: 
${({ theme }) => theme.effects.posterGradient}, 
${({ poster }) => poster ? `url(${poster})` : "none"};
background-position: center;
background-repeat: no-repeat;
background-size: contain;
display: flex;
align-items: flex-end;

img {
    display: block;
}

@media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    height: 600px;
    max-width: 100%;
};

@media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    height: 450px;
    max-width: 100%;
};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 320px;
    width: 100%;
    height: 148px;
}
`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
width: auto;
height: 176px;
margin-left: 276px;
margin-bottom: 57px;

@media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin-left: 40px;
    height: 140px;
    margin-bottom: 40px;
};

@media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-left: 24px;
    height: 90px;
    margin-bottom: 24px;
};

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

@media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 48px;
    height: 58px;
};

@media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 36px;
    height: 44px;
};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    height: 29px;
    font-size: 24px;
}
`;

export const TitleRatingContent = styled.div`
width: auto;
height: 40px;


@media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 14px;
    height: 34px;
    margin-top: 16px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => theme.colors.white};
};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    height: 18px;
    margin-top: 8px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    gap: 4px;
}
`;

export const Votes = styled.div`
width: auto;
height: 40px;
font-size: 16px;
font-weight: 400;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.white};

@media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    height: 24px;
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.white};
};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: 20px;
    font-size: 10px;
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

@media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 24px;
    height: 34px;
};

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

@media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 24px;
    height: 24px;
    margin-right: 6px;
};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: middle;
}
`;