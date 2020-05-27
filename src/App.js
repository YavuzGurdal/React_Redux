import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserHooks from './components/UserHooks';

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <UserHooks />
      </div>
    </Provider>
  );
}

export default App;
