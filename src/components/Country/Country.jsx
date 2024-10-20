import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    const { name, flags, population, area, cca3 } = country;


    const [visited, setVisited] = useState(false)

    const handlerVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = () => handleVisitedCountry(country);

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'Purple' : 'white' }}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark Visited</button> <br />
            <button onClick={handlerVisited}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited ? 'I have visited this country.' : 'I want to visit'
            }
        </div>
    );
};

export default Country;