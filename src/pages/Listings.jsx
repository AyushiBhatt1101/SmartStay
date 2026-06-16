import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Listings = () => {
    const homestays = [
        { id: 1, name: 'Mountain View Homestay', location: 'Chopta', price: 1500, description: 'Beautiful mountain view with cozy rooms', image: '🏔️' },
        { id: 2, name: 'Lakeside Retreat', location: 'Nainital', price: 2000, description: 'Peaceful lakeside cottage', image: '🏞️' },
        { id: 3, name: 'Forest Cabin', location: 'Munnar', price: 1800, description: 'Nature\'s sanctuary in the hills', image: '🌲' },
        { id: 4, name: 'Beachfront Villa', location: 'Goa', price: 3000, description: 'Stunning beach views and sunset', image: '🏖️' },
        { id: 5, name: 'Countryside Cottage', location: 'Coorg', price: 1600, description: 'Rustic charm with modern amenities', image: '🏡' },
        { id: 6, name: 'Desert Oasis', location: 'Jaisalmer', price: 2500, description: 'Golden dunes and starry nights', image: '🏜️' },
        { id: 7, name: 'Hilltop Bungalow', location: 'Shimla', price: 2200, description: 'Panoramic hill station views', image: '⛰️' },
        { id: 8, name: 'Urban Apartment', location: 'Mumbai', price: 3500, description: 'Modern city living with luxury', image: '🏢' },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Homestay Listings</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {homestays.map((homestay) => (
                        <Link key={homestay.id} to={`/details/${homestay.id}`} className="no-underline">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                                <div className="text-6xl text-center py-8 bg-gray-100">{homestay.image}</div>
                                <div className="p-4">
                                    <h2 className="text-xl font-bold text-gray-800">{homestay.name}</h2>
                                    <p className="text-gray-600">{homestay.location}</p>
                                    <p className="text-sm text-gray-500 mt-2">{homestay.description}</p>
                                    <p className="text-lg font-semibold text-blue-600 mt-3">₹{homestay.price}/night</p>
                                    <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors">View Details</button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Listings;