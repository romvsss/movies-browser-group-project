import { Buttons } from "./Buttons";
import { Logo } from "./Logo/index";
import { SearchBar } from "./SearchBar/index";
import { NavigationWrapper } from "./styled";

export const Navigation = () => (
  <>
    <NavigationWrapper>
      <Logo />
      <Buttons />
      <SearchBar />
    </NavigationWrapper>
  </>
);
