import React, {createContext, Button, useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};

    default:
      return state;
  }
};

function Increment({initialCount}) {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <Button onClick={() => dispatch({type: 'increment'})}>
      Increment: {state.count}
    </Button>
  );
}

export const App = () => {
  return <Increment initialCount={5} />;
};
