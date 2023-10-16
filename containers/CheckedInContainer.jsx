import { useEffect, useState } from "react";
import CheckInList from "../components/CheckInList";

const CheckedInContainer = () => {
  const [checkedIns, setCheckedIns] = useState([]);
  const BASE_URL = "http://localhost:8080"; 

  useEffect(() => {
    fetchCheckedIns();
  }, []);

  const fetchCheckedIns = () => {
    fetch(BASE_URL + "/users/12/checked_ins")
      .then((response) => response.json())
      .then((checkIns) => setCheckedIns(checkIns))

  };

  return (
    <CheckInList checkedIns={checkedIns} />
  );
};

export default CheckedInContainer;
