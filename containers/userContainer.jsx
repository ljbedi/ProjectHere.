import { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile"

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch(BASE_URL + "/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }

  return (
    <>
    <UserProfile users={users}/>
    </>
  )
};

export default UserContainer;