import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const { name, capital, region, population, flag } = props.country;
    const history = useHistory();
    const handleClick = (countryName) => {
        history.push(`/country/${countryName}`)
    }

    return (
            <Card className="shadow m-2 px-2 py-2 rounded" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Capital: {capital}</p>
                        <p>Region: {region}</p>
                        <p>Population: {population}</p>
                        <p><Link to={`/country/${name}`}>Show Detail of {name}</Link></p>
                    </Card.Text>
                    <Button onClick={() => handleClick(name)} variant="primary">Click Details</Button>
                </Card.Body>
            </Card>
    );
};

export default Country;