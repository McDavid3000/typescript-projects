import { useState } from 'react';

// Dummy data
const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      {/* Example of conditional rendering. It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.
      Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
      */}
      <div>{user && user.name}</div>
    </div>
  );
};

export default UserSearch;
