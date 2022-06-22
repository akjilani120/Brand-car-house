import React from 'react';
import { useParams } from 'react-router-dom';

const SpecialCarDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>I am Special car Details {id}</h1>
        </div>
    );
};

export default SpecialCarDetails;