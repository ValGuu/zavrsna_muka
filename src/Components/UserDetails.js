import React from "react";
import propTypes from "prop-types";

const UserDetails = ({ user, repos, onReset }) => {
  const { avatar_url, name, location, bio } = user;

  return (
    <div>
      <img src={avatar_url} alt="User Avatar" />
      <h2>Name: {name}</h2>
      <p>Location: {location}</p>
      <p>Bio: {bio}</p>
      <p>Repositories:</p>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

UserDetails.propTypes = {
  user: propTypes.shape({
    avatar_url: propTypes.string,
    name: propTypes.string,
    location: propTypes.string,
    bio: propTypes.string,
  }),
  repos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
    })
  ),
  onReset: propTypes.func,
};

export default UserDetails;
