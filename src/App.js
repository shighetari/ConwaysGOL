import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GamePage from "./components/GamePage"
import LandingPage from './components/LandingPage';
//redux
import { createStore, applyMiddleware } from "redux"
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import {rootReducer as reducer} from './reducers/rootReducer'
import About from './components/About';

const store = createStore(reducer, applyMiddleware(thunk))


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">

            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/game" component={GamePage} />
              <Route exact path="/about" component={About} />

            </Switch>
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
