import React, { useState } from "react";
import propTypes from "prop-types";

const UserForm = ({ onUserSubmit }) => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter GitHub username"
      />
      <button type="submit">GO!</button>
    </form>
  );
};

UserForm.propTypes = {
  onUserSubmit: propTypes.func,
};

export default UserForm;
