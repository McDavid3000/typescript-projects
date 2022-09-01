import { Component } from 'react';

// Define objects used multiple times in seperate interface
// rather than within each of the other seperate interfaces
interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  //bind onClick using an arrow function
  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    // Destructure state
    const { name, user } = this.state;

    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        {/* Example of conditional rendering. It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.
    Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
    */}
        <div>{user && user.name}</div>
      </div>
    );
  }
}

export default UserSearch;
