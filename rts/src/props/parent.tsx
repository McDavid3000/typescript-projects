import { ChildAsFC } from './child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
      Automaticlly recieved children prop
    </ChildAsFC>
  );
};

export default Parent;
