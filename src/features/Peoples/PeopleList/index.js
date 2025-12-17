import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fetchPopularPeople,
  fetchSearchPeople,
  selectTotalResults,
} from "../peopleSlice";
import { StyledHeader } from "./styled";
import { NoResults } from "../../../common/NoResults/index";

export const PeopleList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page"))
    : 1;

  const query = searchParams.get("query");

  const people = useSelector((state) => state.people.peopleList);
  const status = useSelector((state) => state.people.status);
  const totalResults = useSelector(selectTotalResults);
  const isNoResults = status === "success" && query && totalResults === 0;

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchPeople({ query, page }));
    } else {
      dispatch(fetchPopularPeople(page));
    }
  }, [dispatch, query, page]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      {(status === "loading" || status === "success") && (
        <StyledHeader>
          {query ? (
            <>
              Search results for "{query}"
              {status === "success" && totalResults > 0 && (
                <> ({totalResults})</>
              )}
            </>
          ) : (
            "Popular people"
          )}
        </StyledHeader>
      )}

      {status === "success" && (
        <>
          {isNoResults ? (
            <NoResults query={query} />
          ) : (
            <>
              <div style={{ display: "grid", gap: 16 }}>
                {people.map((person) => (
                  <div key={person.id}>
                    <h3>{person.name}</h3>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};
