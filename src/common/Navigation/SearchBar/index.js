import { useLocation } from "react-router-dom";
import { RightWrapper, SearchWrapper, Input, SearchIcon } from "./styled";

export const SearchBar = () => {
  const location = useLocation();

  const isMovies = location.pathname.startsWith("/movies");

  const placeholder = isMovies
    ? "Search for movies..."
    : "Search for people...";

  return (
    <RightWrapper>
      <SearchWrapper>
        <SearchIcon />
        <Input placeholder={placeholder} />
      </SearchWrapper>
    </RightWrapper>
  );
};
