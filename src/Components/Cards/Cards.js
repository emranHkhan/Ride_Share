import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';


const Cards = (props) => {
    const { vehicle } = props;

    return (

        <Link to={`/checkoutinfo/${vehicle.type}`} style={{ textDecoration: 'none' }}>
            <div className="card my-card mt-5">
                <div className="img-container">
                    <img className="card-img-top" src={vehicle.src} alt={vehicle.type} />
                </div>

                <div className="card-body">
                    <h2>{vehicle.type}</h2>
                </div>
            </div>
        </Link>

    );
};

export default Cards;