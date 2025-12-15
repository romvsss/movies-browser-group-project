import { Wrapper, Icon, Header, Paragraph, Button } from "./styled";

export const Error = () => (
  <Wrapper>
    <Icon />
    <Header>Ooops! Something went wrong...</Header>
    <Paragraph>
      Please check your network connection<br />
      and try again
    </Paragraph>
    <Button onClick={() => window.location.reload()}>Back to home page</Button>
  </Wrapper>
);