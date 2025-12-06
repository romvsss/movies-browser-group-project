import { Buttons } from "./Buttons";
import { Logo } from "./Logo/index";
import { SearchBar } from "./SearchBar/index";
import { NavigationWrapper, RowWrapper } from "./styled";

export const Navigation = () => (
  <>
    <NavigationWrapper>
      <RowWrapper>
        <Logo />
        <Buttons />
      </RowWrapper>
      <SearchBar />
    </NavigationWrapper>
  </>
);
