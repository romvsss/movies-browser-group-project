import styled from "styled-components";
import { ReactComponent as PersonIcon } from "../../../../images/Person.svg";

export const PeopleSection = styled.section`
max-width: 1368px;
margin: auto;
margin-bottom: 64px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    max-width: 288px;
    margin: auto;
    margin-bottom: 32px;
}
`;

export const Header = styled.header`
width: auto;
height: 43px;
font-size: 36px;
font-weight: 600;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};
margin-bottom: 36px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: 24px;
    font-size: 20px;
    margin-bottom: 12px;
}
`;

export const TileSection = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
grid-gap: 16px;
margin-bottom: 48px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
    grid-gap: 6px;
    margin-bottom: 16px;
}
`;

export const Tile = styled.div`
width: 208px;
height: auto;
border-radius: 5px;
background-color: ${({ theme }) => theme.colors.white};
box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
padding: 16px;
margin-bottom: 8px;
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: 136px;
    height: auto;
    padding: 8px;
    margin-bottom: 4px;
}
`;

export const TileImage = styled.div`
width: 176px;
height: 231px;
border-radius: 5px;
margin-bottom: 12px;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: 120px;
    height: 178px;
    border-radius: 5px;
    margin-bottom: 8px;
}
`;

export const PersonTile = styled.div`
width: 176px;
height: auto;
gap: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: 120px;
    height: auto;
    gap: 8px;
}
`;

export const TileName = styled.div`
width: auto;
height: auto;
text-align: center;
font-size: 22px;
font-weight: 500;
line-height: 130%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: auto;
    font-size: 14px;
}
`;

export const TileRole = styled.div`
width: auto;
height: auto;
text-align: center;
font-size: 18px;
font-weight: 400;
line-height: 150%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.Darkergrey};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: auto;
    font-size: 13px;
    line-height: 130%;
}
`;

export const Person = styled(PersonIcon)`
width: 176px;
height: 231px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: 120px;
    height: 178px;
    margin-top: 0px;
}
`;