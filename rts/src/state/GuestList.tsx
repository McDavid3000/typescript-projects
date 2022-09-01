import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    // Clearing name prior to using the value is possible within the
    // same render
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>

      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
