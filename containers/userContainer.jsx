import { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile"

const UserContainer = () => {
  const [user, setUser] = useState(null);
  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    fetch(BASE_URL + "/users/1")
      .then((response) => response.json())
      .then((user) => setUser(user));
  }

  return (
    <>
    {user && <UserProfile user={user}/>}
    </>
  )
};

export default UserContainer;