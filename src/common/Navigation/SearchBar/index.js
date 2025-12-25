import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RightWrapper, SearchWrapper, Input, SearchIcon } from "./styled";

export const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const isMovies = location.pathname.startsWith("/movies");

  const isPeople = location.pathname.startsWith("/people");

  const placeholder = isMovies
    ? "Search for movies..."
    : "Search for people...";

  const onInputChange = (e) => {
    const query = e.target.value;
    setValue(query);

    navigate({
      pathname: isMovies ? "/movies" : "/people",
      search: query ? `?query=${query}` : "",
    });
  };

  useEffect(() => {
    setValue("");
  }, [location.pathname]);

  return (
    <RightWrapper>
      <SearchWrapper>
        <SearchIcon />
        <Input
          key={location.pathname}
          value={value}
          placeholder={placeholder}
          onChange={onInputChange}
          autoComplete="off"
        />
      </SearchWrapper>
    </RightWrapper>
  );
};
