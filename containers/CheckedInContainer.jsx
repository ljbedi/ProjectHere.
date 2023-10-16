import { useEffect, useState } from "react";
import CheckInList from "../components/CheckInList";

const CheckedInContainer = () => {
  const [checkedIn, setCheckedIn] = useState([]);
  const BASE_URL = "http://localhost:8080"; 

  useEffect(() => {
    fetchCheckedIn();
  }, []);

  const fetchCheckedIn = () => {
    fetch(BASE_URL + "/checked_in")
      .then((response) => response.json())
      .then((checkIn) => setCheckedIn(checkIn))
      .catch((error) => console.error("Error fetching checked-in data: ", error));
  };

  return (
    <CheckInList checkedIn={checkedIn} />
  );
};

export default CheckedInContainer;
