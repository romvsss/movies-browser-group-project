import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPeopleList } from "../peopleSlice";

export const Profile = () => {
  const { id } = useParams();
  const people = useSelector(selectPeopleList);
  const person = people.find((p) => p.id.toString() === id);

  if (!person) return <p>Person not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{person.name}</h1>
      <>DETAILS COMING SOON</>
    </div>
  );
};
