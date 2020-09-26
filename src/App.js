import React from 'react';
import './App.css';

// REDUX IMPORTS
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// COMPONENTS
import CountryList from './components/CountryList';

// Global State
const initialState = {
  countryList:[],
};

// REDUCER
const reducer = (state, action) => {
  console.log(action);
  
  switch(action.type){

    case 'FETCH_COUNTRIES':{
      return { ...state,countryList:action.payload }
    }

    default:{
      return state;
    }

  }
}

const store = createStore(reducer,initialState);

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <CountryList/>
      </div>
    </Provider>

  );
}

export default App;
