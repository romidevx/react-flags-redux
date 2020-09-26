import React,{useEffect } from 'react';
import styled from 'styled-components';
// COMPONENTS
import Country from './Country';
// REACT REDUX
import {useSelector,useDispatch} from 'react-redux'; 

// CSS STYLED COMPONENT
const CountryListStyled = styled.div `
    margin:30px auto;
    max-width:80%;
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    padding:40px 30px;
    box-shadow:2px 3px 13px rgba(0,0,0,.3);
`;


function CountryList() {

    // GLOBAL STATE AND DISPATCH
    const countryList = useSelector(state => state).countryList;
    const dispatch = useDispatch();

    useEffect(() => {

        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(list => {
            dispatch({ type:'FETCH_COUNTRIES', payload: list});
        })
        .catch(error => console.log('Error => ', error))

    },[dispatch]);


    return (
        <CountryListStyled>
            {
                countryList.map( ({ flag,name,population,region,capital }) => {
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
        </CountryListStyled>
    )
}

export default CountryList;
