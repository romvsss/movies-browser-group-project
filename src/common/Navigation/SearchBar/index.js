import { useLocation, useNavigate } from "react-router-dom";
import { RightWrapper, SearchWrapper, Input, SearchIcon } from "./styled";

export const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isMovies = location.pathname.startsWith("/movies");

  const placeholder = isMovies
    ? "Search for movies..."
    : "Search for people...";

  const onInputChange = ({ target }) => {
    const query = target.value;

    navigate({
      pathname: isMovies ? "/movies" : "/people",
      search: query ? `?query=${query}` : "",
    });
  };

  return (
    <RightWrapper>
      <SearchWrapper>
        <SearchIcon />
        <Input placeholder={placeholder} onChange={onInputChange} />
      </SearchWrapper>
    </RightWrapper>
  );
};
