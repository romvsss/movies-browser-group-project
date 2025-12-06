import styled from "styled-components";
import { ReactComponent as VideoSvg } from "./video.svg";

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 12px;
`;

export const PageTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: 500;
`;

export const VideoIcon = styled(VideoSvg)`
  height: 40px;
  width: 40px;
`;
