import React,{useState,useEffect } from 'react';


// COMPONENTS
import Country from './Country';

// REACT REDUX
import {useSelector,useDispatch} from 'react-redux'; 



function CountryList() {
    const [inputValue,setInputValue] = useState();
    const [region,setRegion] = useState();
    console.log(region);

    const countryListByname = useSelector((state) => state.countryListByname)

    // GLOBAL STATE AND DISPATCH
    const countryList = useSelector(state => {
        if (state.filterByregion !== '' && countryListByname.length === 0){
            return state.countryFilteredByRegion;
        }
        if (state.countryListByname.length > 0) {
            return state.countryListByname;
        }
            return state.countryList;
    });
      
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(list => {
            dispatch({ type:'FETCH_COUNTRIES', payload: list});
        })
        .catch(error => console.log('Error => ', error))
    },[dispatch]);

    
    const getRegion = e => {
        //console.log(region);
        dispatch({
            type:'FILTER_COUNTRIES_BY_REGION',
            payload:e.target.value
        });
    }


    const filterCountries = e => {
        //console.log(e.target.value);
        dispatch({
            type:'FILTER_COUNTRIES_BY_NAME',
            payload:e.target.value
        });
    }

    return (

        <div className="main">

            <div className="main-header">
                
                <select name="region" onChange={getRegion}>
                    
                    {/* <option value='name' selected disabled >  Choose region  </option> */}
                    <option value='Africa'>  Africa  </option>
                    <option value='Americas'>Americas</option>
                    <option value='Asia'>    Asia    </option>
                    <option value='Europe'>  Europe  </option>
                    <option value='Oceania'> Oceania </option>
                </select>

                <input 
                    type="text" 
                    placeholder="Enter country to search.." 
                    value={inputValue} 
                    onChange={filterCountries}
                /> 

            </div>

            

            <div className="country-list">
                {
                    countryList.map( ({ flag,name,population,region,capital}) => {
                        return (
                               
                                <Country 
                                    key={name}
                                    flag={flag}
                                    name={name}
                                    population={population}
                                    region={region}
                                    capital={capital}

                                />
                                
                            
                        )

                    })
                }

            </div>

        </div>
  
    )
}

export default CountryList;
