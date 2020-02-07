import React from 'react';
import './App.css';
import BeerForm from './components/BeerForm';
import { createStore, applyMiddleware } from 'redux';
import { beerReducer as reducer } from "./reducers/beerReducer";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <h1 className="App-header">
        Know Your Craft Beers! 
        </h1>
        <BeerForm />
      </div>
    </Provider>
  );
}

export default App;
