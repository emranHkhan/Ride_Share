import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Cards.css';


const Cards = (props) => {
    const { vehicle } = props;
    const {transport} = useContext(UserContext);
    const [vehicleType, setVehicleType] = transport;
    

    return (
      
        
        <Link to={`/checkoutinfo/${vehicle.type}`} style={{textDecoration: 'none'}}>
            <div className="card my-card">
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