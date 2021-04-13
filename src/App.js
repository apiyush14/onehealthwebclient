import React, { Component } from 'react';
import EventStepper from './stepper/EventStepper'
import logo from './logo.svg';
import './App.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import eventReducer from './store/event-reducer';


const rootReducer= combineReducers({
 events: eventReducer 
});

const store=createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fitlers</h1>
        </header>
         <EventStepper/>
      </div>
      </Provider>
    );
  }
}

export default App;
