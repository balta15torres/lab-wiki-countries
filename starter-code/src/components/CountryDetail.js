import React from 'react';
import {Link} from "react-router-dom"
import countries from "../countries"


const CountryDetail = () => {
    console.log(countries)
    return (
        <div>
            <div>
                {countries.map((country, indx)=>
                <Link key={indx} to={'/country-details/${country.cca3}'}>{country.flag}{country.name.common}<br></br><hr></hr></Link>)}
            
            </div>
        </div>
    )
}


export default CountryDetail


