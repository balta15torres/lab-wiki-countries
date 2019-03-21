import React from 'react';
import countries from "../countries"

const Details = (country, indx) => {
    
    return  (
        <div className="" key={indx}>
          
          <h3>{country.name.common}</h3>
          
          
        </div>
        )
}



export default Details