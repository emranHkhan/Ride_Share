import React from 'react';

const VehicleInfo = ({vehicleInfo}) => {
    return (
        <div className="d-flex justify-content-between align-items-center mt-5">
            <img src={vehicleInfo.src} alt="" style={{ maxWidth: '50px', maxHeight: '50px' }} />
            <h4>{vehicleInfo.type}</h4>
            <h4>{vehicleInfo.quantity}</h4>
            <h4>{vehicleInfo.price}</h4>
        </div>
    );
};

export default VehicleInfo;