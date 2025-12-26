import styled from "styled-components";

export const Wrapper = styled.div`
max-width: 1920px;
width: auto;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 16px;
}
`;