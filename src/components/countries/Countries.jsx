import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'
const countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedContries, setVisitedCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {

    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries</h5>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}>
                    </Country>)
                }
            </div>

        </div>
    );
};

export default countries;