import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../images/spinner.svg";

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