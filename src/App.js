import React from 'react';
import './App.css';

// REDUX IMPORTS
import store from './redux/reducer';
import {Provider} from 'react-redux';


// COMPONENTS
import CountryList from './components/CountryList';
import CountryInfo from  './components/CountryInfo';

function App() {
  return (

      <div className="App">

        <Provider store={store}>
          <CountryList/>
        </Provider>

      </div>
  );
}

export default App;
