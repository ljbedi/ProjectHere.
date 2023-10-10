import { useEffect, useState } from "react";
import userProfile from "../components/userProfile";

const userContainer = () => {
  const [users, setUser] = useState([]);
  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch(BASE_URL + "/users")
      .then((response) => response.json())
      .then((users) => setUser(users));
  }

  return (
    <>
    <userProfile users={users}/>
    </>
  )
};

export default userContainer;