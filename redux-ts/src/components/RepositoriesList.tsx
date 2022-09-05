import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { actionCreators } from '../state';

const RepositoriesList: React.FC = () => {
  // Array destructuring
  const [term, setTerm] = useState('');
  const { SearchRepositories } = useActions();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // Not an ideal line
    SearchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />

        <button>Search</button>
      </form>
    </div>
  );
};
export default RepositoriesList;
