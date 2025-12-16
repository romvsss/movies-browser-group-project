import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const PeopleList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const people = useSelector((state) => state.people.peopleList);
  const status = useSelector((state) => state.people.status);

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