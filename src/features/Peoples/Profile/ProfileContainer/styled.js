import styled from "styled-components";
import { ReactComponent as PersonIcon } from "../../../../images/Profile.svg";

export const Container = styled.div`
  max-width: 1368px;
  width: 100%;
  height: auto;
  margin-top: 56px;
  margin-bottom: 64px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  gap: 16px;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "image description"
    "image story";
  grid-column-gap: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: 100%;
    height: auto;
    margin-top: 48px;
    margin-bottom: 48px;
    padding: 32px;
    display: grid;
    grid-column-gap: 24px;
    grid-row-gap: 16px;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    grid-gap: 16px;
    grid-template-areas:
      "image description"
      "story story";
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    margin-top: 23px;
    margin-bottom: 24px;
    padding: 16px;
  }
`;

export const ActorImage = styled.div`
  width: 399px;
  height: 564px;
  border-radius: 5px;
  grid-area: image;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 116px;
    height: 163px;
  }
`;

export const Description = styled.article`
  height: auto;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-area: description;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    height: auto;
    padding-top: 6px;
    padding-bottom: 6px;
    grid-area: description;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: auto;
    padding-top: 4px;
    padding-bottom: 4px;
    grid-area: description;
  }
`;

export const Name = styled.header`
  width: auto;
  height: 43px;
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 24px;
    margin-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    height: auto;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
  }
`;

export const DataTile = styled.ul`
  height: auto;
  padding: 0;
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 8px;
  row-gap: 8px;
  margin-top: 0px;
  margin-bottom: 8px;
  list-style: none;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const ActorData = styled.li`
  height: 22px;
  font-size: 18px;
  font-weight: 400;
  line-height: 120% letter-spacing 0px;
  justify-self: start;
  white-space: normal;
  word-break: break-word;
  color: ${({ theme }) => theme.colors.waterloo};

  &::before {
    content: "Date of birth:";
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: auto;
    font-size: 12px;

    &::before {
      content: "Birth:";
    }
  }
`;

export const ActorData2 = styled.li`
  height: 22px;
  font-size: 18px;
  font-weight: 400;
  line-height: 120% letter-spacing 0px;
  justify-self: start;
  white-space: normal;
  word-break: break-word;
  color: ${({ theme }) => theme.colors.waterloo};

  &::before {
    content: "Place of birth:";
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: auto;
    font-size: 12px;
  }
`;

export const Data = styled.li`
  width: auto;
  height: auto;
  font-size: 18px;
  font-weight: 400;
  line-height: 120% letter-spacing 0px;

  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100%;
    height: auto;
    font-size: 12px;
    line-height: 130%;
  }
`;

export const Story = styled.div`
  width: auto;
  height: auto;
  word-break: break-word;
  grid-area: story;
  font-size: 20px;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    height: auto;
    grid-area: story;
    font-size: 14px;
  }
`;

export const Person = styled(PersonIcon)`
  width: 399px;
  height: 564px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 116px;
    height: 163px;
    margin-top: 0px;
  }
`;
