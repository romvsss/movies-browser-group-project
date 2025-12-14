import styled from "styled-components";
import { ReactComponent as CameraIcon } from "../icon.svg";
import { ReactComponent as StarIcon } from "../shape-star.svg";

export const MovieTile = styled.article`
max-width: 1368px;
height: 544px;
margin: auto;
margin-bottom: 64px;
background-color: ${({ theme }) => theme.colors.white};
padding: 40px;
display: grid;
grid-template-columns: auto 1fr;
grid-template-rows: auto 1fr;
grid-template-areas:
    "poster mobile"
    "poster story";
grid-column-gap: 40px;
grid-row-gap: 16px;
box-shadow: 0px 4px 12px #BAC7D580;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 288px;
    height: 400px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: /*1fr*/ auto auto;
    grid-template-areas:
    "poster mobile"
    "story story";
    grid-column-gap: 16px;
    grid-row-gap: 8px;
    padding: 16px;
    margin-bottom: 21px;
}
`;

export const Poster = styled.div`
aspect-ratio: 3.12 / 4.64;
width: 100%;
height: 100%;
border-radius: 5px;
scale: crop;
background-color: ${({ theme }) => theme.colors.waterloo};
background-size: cover;
background-position: center;
background-position-x: center;
background-image: ${({ theme }) => theme.effects.tileSHadow};
display: flex;
align-items: center;
justify-content: center;
grid-area: poster;

/* background-image: url('/path/to/movie/poster.jpg') - na później;*/

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
width: 114px;
height: 169px;
grid-area: poster;
}
`;

export const MobileOnly = styled.div`
width: 936px;
height: auto;
gap: 8px;
display: flex;
flex-direction: column;
align-items: flex-start;
flex-wrap: wrap;
grid-area: mobile;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: 176px;
    display: grid;
    grid-area: mobile;
}
`;

export const Description = styled.div`


@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
   width: auto;
   height: 176px;
   padding-top: 0;
   padding-bottom: 0;
}
`;

export const Title = styled.header`
font-size: 36px;
font-weight: 600;
line-height: 120%;
letter-spacing: 0px;
margin-bottom: 24px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    font-weight: 500; 
    line-height: 130%;
    letter-spacing: 0px;
    margin-bottom: 0px;
}
`;

export const Year = styled.div`
font-size: 22px;
font-weight: 400;
line-height: 120%;
letter-spacing: 0px;
word-break: break-word;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    font-size: 13px;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: 0px;
    word-break: break-word;
    margin-bottom: 0px;
    color: ${({ theme }) => theme.colors.Darkergrey};
}
`;

export const DataTile = styled.ul`
width: auto;
height: 52px;
padding: 0;
display: grid;
grid-template-columns: 122px 102px;
column-gap: 8px;
margin-top: 8px;
margin-bottom: 4px;
list-style: none;
color: ${({ theme }) => theme.colors.waterloo};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    max-width: 126px;
    height: auto;
    grid-template-columns: 1fr;
    row-gap: 4px;
    margin-top: 0px;
    margin-bottom: 0px;
}
`;

export const MovieData= styled.li`
height: 22px;
font-size: 18px;
font-weight: 400;
line-height: 120%
letter-spacing 0px;
color: ${({ theme }) => theme.colors.waterloo};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    display: none;
}
`;

export const Data = styled.li`
width: auto;
height: 22px;
font-size: 18px;
font-weight: 400;
line-height: 120%
letter-spacing 0px;
display: flex;
align-items: flex-start;
color: ${({ theme }) => theme.colors.black};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: 16px;
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 0px;
    color: ${({ theme }) => theme.colors.black};
}
`;

export const Tags = styled.ul`
width: auto;
height: 30px;
display: flex;
flex-wrap: wrap;
flex-direction: row;
gap: 16px;
padding-inline-start: 0;
list-style: none;
margin-bottom: 4px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: auto;
    gap: 4px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 1px;
    margin-bottom: 0px;
}
`;

export const Tag = styled.li`
width: auto;
height: 30px;
background-color: ${({ theme }) => theme.colors.mystic};
padding: 8px 16px;
border-radius: 5px;
font-size: 14px;
font-weight: 400;
line-height: 100%;
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
width: auto;
height: 29px;
font-size: 14px;
font-weight: 400;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};
margin-bottom: 18px;
margin-top: 8px;
display: flex;
flex-direction: row;
align-items: baseline;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: 24px;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 13px;
    line-height: 130%;
    letter-spacing: 0px;
    color: ${({ theme }) => theme.colors.Darkergrey};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
`;

export const Rating = styled.div`
width: auto;
height: 29px;
font-size: 22px;
font-weight: 500;
line-height: 130%;
letter-spacing: 0px;
vertical-align: middle;
color: ${({ theme }) => theme.colors.black};
margin-right: 8px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: 24px;
    font-size: 13px;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: 0px;
    margin-right: 4px;
    display: flex;
    align-items: center;
}
`;

export const DataMobileOnly = styled.div`

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    display: none;
}
`;

export const Votes = styled.p`
width: auto;
height: 17px;
font-size: 14px;
font-weight: 400;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};
margin-left: 8px;
`;

export const Story = styled.div`
width: 100%;
height: auto;
font-size: 20px;
font-weight: 400;
line-height: 160%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};
grid-area: story;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: 176px;
    display: grid;
    grid-area: story;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 0px;
}
`;

export const NoMovieIcon = styled(CameraIcon)`
width: 128px;
height: 128px;
stroke-width: 1.5px;
`;

export const Star = styled(StarIcon)`
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