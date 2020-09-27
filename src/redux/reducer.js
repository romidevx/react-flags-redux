import {createStore} from 'redux';

// Global State
const initialState = {
    countryList:[],
    countryFilteredByRegion:[],
    countryListByname:[],
    filterByregion:'',
  };


// REDUCER
const reducer = (state, action) => {
    
    console.log(action);
    
    switch(action.type){
  
      case 'FETCH_COUNTRIES':{
         return { ...state,countryList:action.payload }
      }

      case 'FILTER_COUNTRIES_BY_REGION':{

        
        const newCountryFilteredByRegion = state.countryList.filter((country) => country.region === action.payload);

        console.log('filterByregion => ', action.payload);
        console.log('countryFilteredByRegion => ',newCountryFilteredByRegion);
        return { ...state, countryFilteredByRegion:newCountryFilteredByRegion, filterByregion:action.payload}

      }

      case 'FILTER_COUNTRIES_BY_NAME':{

        let list;

          if (state.filterByRegion !== '') {
            list = state.coutryFilteredByRegion
          } else {
            list = state.countryList
          }

        const countryListFilterByName = state.countryList.filter((country) => country.name.toLowerCase().includes(action.payload.toLowerCase()));
        
        console.log('Country name => ', action.payload);
        console.log('countryFilteredByRegion => ',countryListFilterByName);
        
        return { ...state, countryListByname:countryListFilterByName}

      }
  
  
      default:{
          return state;
      }
  
    }
  }

 

const store = createStore(reducer,initialState);

export default store;

