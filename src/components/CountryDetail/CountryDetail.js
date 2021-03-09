import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Container, Image, Jumbotron } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([])
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, []);
    const { flag, name, capital, region, population } = country;
    return (
        <Container>
                <Jumbotron>
                    <Image src={flag} fluid style={{ height: "300px", width: "100%" }}/>
                    <h1>{name}</h1>
                            <p>Capital: {capital}</p>
                            <p>Region: {region}</p>
                            <p>Population: {population}</p>
                            <Link to="/home">
                                <Button variant="primary">Learn more</Button>
                            </Link>
                </Jumbotron>
        </Container>
        
        // <Container>
        //     <Card>
        //         <Card.Img variant="top" src={flag} style={{ height: "100px", width: "100%" }} />
        //         <Card.Body>
        //             <Card.Text>
        //                 <h4>{name}</h4>
        //                 <p>Capital: {capital}</p>
        //                 <p>Region: {region}</p>
        //                 <p>Population: {population}</p>
        //             </Card.Text>
        //         </Card.Body>
        //     </Card>
        // </Container>
    );
};

export default CountryDetail;