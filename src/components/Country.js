import React from 'react';
import {Link} from 'react-router-dom';


function Country({ flag,name,population,region,capital }) {

    return (
        
        <div className="country">

                 <img loading="lazy" src={flag} alt={name}/>
                
                <div className="country-details">
                    <h2>{name}</h2>
                    <p><strong>Population: </strong> {population}</p>
                    <p><strong>Region:     </strong> {region}    </p>
                    <p><strong>Capital:    </strong> {capital}   </p>
                </div>
                
        </div>
    )   
}

export default Country;
