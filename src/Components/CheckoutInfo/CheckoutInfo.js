import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { vehicles } from '../../fakedata';
import GoogleMap from '../GoogleMap/GoogleMap';
import VehicleInfo from '../VehicleInfo/VehicleInfo';
import './CheckoutInfo.css';

// Readme edit korte hobe

const CheckoutInfo = () => {
    let { type } = useParams();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [visibility, setVisibilty] = useState(true);


    function handleVehicleInfo(type) {
        let obj;

        if (type === undefined) {
            return "";
        }

        else {
            obj = vehicles.find(vehicle => vehicle.type === type)
            return obj;
        }
    }


    const vehicleInfo = handleVehicleInfo(type);


    const handleVisibility = (e) => {
        e.preventDefault();
        setVisibilty(!visibility);
    }

    return (
        <div className="container">


            <div className="row mt-5 pb-5">

                <div className="col-lg-3 pt-3">
                    {
                        visibility ? (
                            <div className="jumbo ml-5">

                                <Form onSubmit={handleVisibility}>
                                    <Form.Group>
                                        <Form.Label>From</Form.Label>
                                        <Form.Control onBlur={(e) => setFrom(e.target.value)} required />

                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>To</Form.Label>
                                        <Form.Control onBlur={(e) => setTo(e.target.value)} required />
                                    </Form.Group>

                                    <Button variant="primary" className="btn btn-block btn-info" type="submit">
                                        Search
                                    </Button>
                                </Form>



                            </div>
                        ) :

                            (
                                <div className="jumbo ml-5">
                                    <div>
                                        <h5>From <span className="text-success">{from}</span> to <span className="text-warning">{to}</span></h5>
                                    </div>
                                
                                    <VehicleInfo vehicleInfo={vehicleInfo} />
                                    <VehicleInfo vehicleInfo={vehicleInfo} />
                                    <VehicleInfo vehicleInfo={vehicleInfo} />

                                    <Button variant="primary" className="btn btn-block btn-info mt-5" onClick={() => setVisibilty(!visibility)}>
                                        Back
                                    </Button>
                                </div>

                            )
                    }


                </div>
                <div className="col-lg-8 offset-lg-1 map-div pl-5 pt-3">
                   <GoogleMap />
                </div>
            </div>


        </div >

    );
};

export default CheckoutInfo;