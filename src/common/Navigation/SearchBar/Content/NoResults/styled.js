import styled from "styled-components";
import { ReactComponent as Picture } from "./Picture.svg";

export const Wrapper = styled.div`
display: grid;


@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 32px;
}
`;

export const LoadingHeader = styled.h2`
padding: 8px, 16px;
margin-left: 0px;
margin-top: 56px;
font-weight: 600 bold;
font-size: 36px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 23px;
    margin-left: 16px;
    font-size: 24px;
}
`;

export const StyledPicture = styled(Picture)`
align-self: center;
justify-self: center;
margin-top: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 95%;
    height: auto;
    margin-top: 10%;
  }
`;
