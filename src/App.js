import React, { useEffect, useState } from "react";
import UserDetails from "./Components/UserDetails";
import UserForm from "./Components/UserForm";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (username) {
      fetchUserDetails(username);
    }
  }, [username]);

  const fetchUserDetails = async (username) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();

      setUser(userData);
      setRepos(reposData);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleUserSubmit = (username) => {
    setUsername(username);
  };

  const handleReset = () => {
    setUsername("");
    setUser(null);
    setRepos([]);
  };

  return (
    <div>
      {user ? (
        <UserDetails user={user} repos={repos} onReset={handleReset} />
      ) : (
        <UserForm onUserSubmit={handleUserSubmit} />
      )}
    </div>
  );
};

export default App;
