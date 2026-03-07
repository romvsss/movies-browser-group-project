import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchPopularPeople,
  fetchSearchPeople,
  selectTotalResults,
  selectTotalPages,
} from "../peopleSlice";
import { PeopleListWrapper, Container } from "./styled";
import { PeopleListCard } from "./PeopleListCard/index";
import { Pagination, maxPageSize } from "../../../common/Pagination";
import { PeopleListHeader } from "./PeopleListHeader";
import { PeopleListContent } from "./PeopleListContent";

export const PeopleList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const page = Number(searchParams.get("page")) || 1;
  const query = searchParams.get("query");

  const people = useSelector((state) => state.people.peopleList);
  const status = useSelector((state) => state.people.status);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);

  const isNoResults = status === "success" && query && totalResults === 0;

  useEffect(() => {
    if (query) {
      dispatch(fetchSearchPeople({ query, page }));
    } else {
      dispatch(fetchPopularPeople(page));
    }
  }, [dispatch, query, page]);

  const onPageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      navigate(`?page=${newPage}${query ? `&query=${query}` : ""}`);
    }
  };

  return (
    <PeopleListWrapper>
      <PeopleListHeader
        query={query}
        status={status}
        totalResults={totalResults}
      />

      <PeopleListContent
        status={status}
        isNoResults={isNoResults}
        query={query}
      >
        <>
          <Container>
            {people.map((person) => (
              <PeopleListCard key={person.id} person={person} />
            ))}
          </Container>

          <Pagination
            page={page}
            totalPages={Math.min(totalPages, maxPageSize)}
            onPageChange={onPageChange}
          />
        </>
      </PeopleListContent>
    </PeopleListWrapper>
  );
};