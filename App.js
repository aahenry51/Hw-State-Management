import React, {createContext, Button} from 'react';

const ThemeContext = createContext();

const ThemedButton = () => (
  <ThemeContext.Consumer>
    {value => (
      <Button primaryColor={{primaryColor: 'green'}}>
        I'm button using context!
      </Button>
    )}
  </ThemeContext.Consumer>
);

const App = props => (
  <ThemeContext.Provider value={{primaryColor: 'green'}}>
    {props.children}
  </ThemeContext.Provider>
);

export default App;
