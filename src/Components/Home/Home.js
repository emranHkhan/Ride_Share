import React from 'react';
import { vehicles } from '../../fakedata';
import Cards from '../Cards/Cards';

const Home = () => {

    return (
        <>
            <h2 className="text-center mt-2">Choose A Transport</h2>

            <div className="container my-5 d-flex justify-content-between flex-wrap">
               
                    
                        {
                            vehicles.map(vehicle => <Cards vehicle={vehicle} key={vehicle.id} />)
                        }
                    
                
            </div>
        </>

    );
};

export default Home;