import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';


const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className="container mt-5">
            <h1>Countries: {countries.length}</h1>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    countries.map(country => <Country key={country.numericCode} country={country}></Country>)
                }
            </div>

        </div>
    );
};

export default Home;