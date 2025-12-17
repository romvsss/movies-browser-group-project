import { LeftWrapper, LogoLink , VideoIcon, PageTitle } from "./styled";

export const Logo = () => (
  <>
    <LeftWrapper>
      <LogoLink to="/">
        <VideoIcon />
        <PageTitle>Movies Browser</PageTitle>
      </LogoLink >
    </LeftWrapper>
  </>
);
