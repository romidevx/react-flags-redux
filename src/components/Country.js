import React from 'react';
import styled from 'styled-components';

const CountryStyled = styled.div `
        width:264px;
        box-shadow:2px 3px 13px rgba(0,0,0,.2);
        margin:10px;
        
    img{
        max-width:100%;
    }

    .country-details{
        padding:.80rem;
        margin-bottom:1rem;
    }

    h2{
        font-size:18px;
        color:#d11842
    }

`;


function Country({ flag,name,population,region,capital }) {

    return (

        <CountryStyled>
                <img loading="lazy" src={flag} alt={name}/>

                <div className="country-details">
                    <h2>{name}</h2>
                    <p><strong>Population: </strong> {population}</p>
                    <p><strong>Region:     </strong> {region}    </p>
                    <p><strong>Capital:    </strong> {capital}   </p>
                </div>

        </CountryStyled>
    )
}

export default Country;
