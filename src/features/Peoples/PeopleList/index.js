import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  fetchPopularPeople,
  fetchSearchPeople,
} from "../peopleSlice";

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

  if (!people || people.length === 0) {
    return <p>Brak wyników</p>;
  }

  return (
    <div style={{ display: "grid", gap: 16 }}>
      {people.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
        </div>
      ))}
    </div>
  );
};