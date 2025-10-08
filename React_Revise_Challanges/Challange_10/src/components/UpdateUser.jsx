import React, { useState, useContext } from 'react'
import { userContext } from '../UserContext'

const UpdateUser = () => {
  const [input, setInput] = useState('');
  const [, updateUser] = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      updateUser(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new name"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit">Update Name</button>
    </form>
  );
}

export default UpdateUser