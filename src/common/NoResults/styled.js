import styled from "styled-components";
import { ReactComponent as Picture } from "../../images/Picture.svg";

export const Wrapper = styled.div`
display: grid;


@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 32px;
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
