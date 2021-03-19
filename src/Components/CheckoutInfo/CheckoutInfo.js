import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { vehicles } from '../../fakedata';
import './CheckoutInfo.css';
import { UserContext } from '../../App';

const CheckoutInfo = () => {
    let { type } = useParams();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [visibility, setVisibilty] = useState(true);
    const { transport } = useContext(UserContext);
    const [vehicleType, setVehicleType] = transport;

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

    return (
        <div>
           

            <div className="row mt-5">

                <div className="col-lg-3">
                    {
                        visibility ? (
                            <div className="jumbo">

                                <Form>
                                    <Form.Group>
                                        <Form.Label>From</Form.Label>
                                        <Form.Control onBlur={(e) => setFrom(e.target.value)} />

                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>To</Form.Label>
                                        <Form.Control onBlur={(e) => setTo(e.target.value)} />
                                    </Form.Group>

                                    <Button variant="primary" className="btn btn-block btn-info" onClick={() => setVisibilty(!visibility)}>
                                        Search
                                    </Button>
                                </Form>



                            </div>
                        ) :

                            (
                                <div className="jumbo">
                                    <div>
                                        <h5>From <span className="text-success">{from}</span> to <span className="text-warning">{to}</span></h5>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-5">
                                       <img src={vehicleInfo.src} alt="" style={{maxWidth: '50px', maxHeight: '50px'}} />
                                       <h4>{vehicleInfo.type}</h4>
                                       <h4>{vehicleInfo.quantity}</h4>
                                       <h4>{vehicleInfo.price}</h4>
                                    </div>



                                    <Button variant="primary" className="btn btn-block btn-info mt-5" onClick={() => setVisibilty(!visibility)}>
                                        Back
                                    </Button>
                                </div>

                            )
                    }


                </div>
                <div className="col-lg-8 offset-lg-1 p-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis reprehenderit odio labore recusandae itaque quo dolorum dolorem eaque deleniti sequi, esse rem! Iure eos tempora aspernatur officiis, consectetur corporis.
                    Nemo voluptas, tempora magnam quasi, amet dignissimos dolores animi nesciunt qui, vel eius libero magni assumenda ipsam perferendis ullam maxime eum tempore quas id? Error ipsum quod animi vitae quae?
                </div>
            </div>


        </div >

    );
};

export default CheckoutInfo;