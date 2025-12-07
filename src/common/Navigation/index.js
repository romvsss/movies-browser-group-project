import { Buttons } from "./Buttons";
import { Logo } from "./Logo/index";
import { SearchBar } from "./SearchBar/index";
import { Container, NavigationWrapper, RowWrapper } from "./styled";

export const Navigation = () => (
  <Container>
    <NavigationWrapper>
      <RowWrapper>
        <Logo />
        <Buttons />
      </RowWrapper>
      <SearchBar />
    </NavigationWrapper>
  </Container>
);
