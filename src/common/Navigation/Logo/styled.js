import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as VideoSvg } from "../../../images/video.svg";

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 8px;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 12px;
`;

export const PageTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 500;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const VideoIcon = styled(VideoSvg)`
  height: 40px;
  width: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 17px;
    height: 17px;
  }
`;
