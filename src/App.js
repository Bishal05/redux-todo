import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Todo from './Components/Todo';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo></Todo>
      </div>
    </Provider>
  );
}

export default App;
