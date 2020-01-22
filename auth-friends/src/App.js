import React from 'react';
import logo from './logo.svg';
import './App.css';


import Login from './components/Login';
import AddFriendForm from './components/AddFriend';
import FriendList from './components/FriendList';


import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import friendReducer from './reducers/friendsReducer';
import MasterRouter from './Routes/MasterRouter';

const store = createStore(friendReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <MasterRouter />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <Login />
          <AddFriendForm />
          <FriendList /> */}
        </header>
      </div>
    </Provider>
  );
}

export default App;
