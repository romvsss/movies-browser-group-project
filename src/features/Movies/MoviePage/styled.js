import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 16px;
}
`;

export const MovieDetails = styled.div`
max-width: 1368px;
width: auto;
margin: auto;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 288px;
    width: auto;
    margin: auto;
}
`;