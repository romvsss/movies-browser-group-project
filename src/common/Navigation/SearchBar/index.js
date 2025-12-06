import { RightWrapper, SearchWrapper, Input, SearchIcon } from "./styled";

export const SearchBar = () => {
  return (
    <RightWrapper>
      <SearchWrapper>
        <SearchIcon />
        <Input placeholder="Search for people…" />
      </SearchWrapper>
    </RightWrapper>
  );
};
