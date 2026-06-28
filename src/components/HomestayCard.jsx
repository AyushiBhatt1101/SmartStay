import React from 'react';
import { useHistory } from 'react-router-dom';

const HomestayCard = ({ id, name, location, price }) => {
    const history = useHistory();

    const handleViewDetails = () => {
        history.push(`/details/${id}`);
    };

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">{location}</p>
            <p className="text-lg font-semibold">{price}/night</p>
            <button 
                onClick={handleViewDetails}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                View Details
            </button>
        </div>
    );
};

export default HomestayCard;