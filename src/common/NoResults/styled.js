import styled from "styled-components";
import { ReactComponent as Picture } from "../../images/Picture.svg";

export const Wrapper = styled.div`
  display: grid;
  min-height: 100vh;
  padding-bottom: 15%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 15px;
  }
`;

export const StyledPicture = styled(Picture)`
  align-self: center;
  justify-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    align-self: flex-start;
    width: 50%;
    height: auto;
    margin-top: 20%;
  }
`;
