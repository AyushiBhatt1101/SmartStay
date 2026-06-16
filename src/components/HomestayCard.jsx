import React from 'react';

const HomestayCard = ({ name, location, price }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">{location}</p>
            <p className="text-lg font-semibold">{price}/night</p>
            <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
                View Details
            </button>
        </div>
    );
};

export default HomestayCard;