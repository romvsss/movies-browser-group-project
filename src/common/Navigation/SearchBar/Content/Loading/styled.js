import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
to {
    transform: rotate(360deg);
}
`;

export const Wrapper = styled.div`
display: grid;


@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 32px;
}
`;

export const StyledSpinner = styled(Spinner)`
align-self: center;
justify-self: center;
margin-top: 163px;
animation: ${rotate} 1s linear infinite;
color: ${({ theme }) => theme.colors.primary};
height: auto;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 106px;
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
    margin-left: 0px;
    font-size: 24px;
}
`;