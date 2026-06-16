import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Details = () => {
    const { id } = useParams();
    const history = useHistory();

    const homestayData = {
        1: { name: 'Mountain View Homestay', location: 'Chopta', price: 1500, image: '🏔️', description: 'Experience the serene beauty of mountain peaks with our cozy homestay. Perfect for nature lovers and adventure seekers.', amenities: ['WiFi', 'Parking', 'Hot Water', 'Kitchen Access', 'Garden', 'Fireplace'], rating: 4.8, reviews: 125 },
        2: { name: 'Lakeside Retreat', location: 'Nainital', price: 2000, image: '🏞️', description: 'Wake up to the sound of waves and enjoy breathtaking lakeside views. Our peaceful retreat is ideal for relaxation.', amenities: ['WiFi', 'Parking', 'Boat Access', 'Restaurant', 'Swimming', 'Spa'], rating: 4.9, reviews: 89 },
        3: { name: 'Forest Cabin', location: 'Munnar', price: 1800, image: '🌲', description: 'Nestled in lush green forests, this cabin offers a perfect escape from city life with modern amenities.', amenities: ['WiFi', 'Parking', 'Tea Garden Tour', 'Bonfire', 'Hiking Trails'], rating: 4.7, reviews: 156 },
        4: { name: 'Beachfront Villa', location: 'Goa', price: 3000, image: '🏖️', description: 'Luxurious beachfront villa with stunning sunset views, pristine beaches, and world-class amenities.', amenities: ['WiFi', 'Parking', 'Beach Access', 'Pool', 'Gym', 'Restaurant'], rating: 4.9, reviews: 234 },
        5: { name: 'Countryside Cottage', location: 'Coorg', price: 1600, image: '🏡', description: 'Rustic charm meets modern comfort in our countryside cottage surrounded by coffee plantations.', amenities: ['WiFi', 'Parking', 'Farm Tour', 'Cooking Classes', 'Garden'], rating: 4.6, reviews: 92 },
        6: { name: 'Desert Oasis', location: 'Jaisalmer', price: 2500, image: '🏜️', description: 'Experience the magic of the desert with camel rides, stargazing, and authentic desert hospitality.', amenities: ['WiFi', 'Parking', 'Camel Safari', 'Bonfire', 'Traditional Food'], rating: 4.8, reviews: 178 },
        7: { name: 'Hilltop Bungalow', location: 'Shimla', price: 2200, image: '⛰️', description: 'Panoramic views of snow-capped mountains and lush valleys from our hilltop bungalow.', amenities: ['WiFi', 'Parking', 'Fireplace', 'Mountain View', 'Adventure Tours'], rating: 4.7, reviews: 145 },
        8: { name: 'Urban Apartment', location: 'Mumbai', price: 3500, image: '🏢', description: 'Modern luxury apartment in the heart of the city with all premium amenities and city views.', amenities: ['WiFi', 'Parking', 'Gym', 'Concierge', 'City View', 'Restaurant'], rating: 4.8, reviews: 203 },
    };

    const homestay = homestayData[id];

    if (!homestay) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow container mx-auto p-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">Homestay Not Found</h1>
                    <button onClick={() => history.push('/listings')} className="mt-4 bg-blue-500 text-white py-2 px-6 rounded">Back to Listings</button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <button onClick={() => history.goBack()} className="ml-6 mt-4 text-blue-500 font-semibold">← Back</button>
                <div className="container mx-auto p-6">
                    {/* Hero Section */}
                    <div className="bg-gray-200 rounded-lg text-9xl text-center py-16 mb-6">{homestay.image}</div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">{homestay.name}</h1>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-yellow-500 text-lg">⭐ {homestay.rating}</span>
                                <span className="text-gray-600">({homestay.reviews} reviews)</span>
                            </div>
                            <p className="text-gray-600 text-lg mb-2">📍 {homestay.location}</p>
                            <p className="text-xl font-semibold text-blue-600 mb-6">₹{homestay.price} per night</p>

                            {/* Description */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">About</h2>
                                <p className="text-gray-700 leading-relaxed">{homestay.description}</p>
                            </div>

                            {/* Amenities */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Amenities</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {homestay.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                                            <span className="text-lg">✓</span>
                                            <span className="text-gray-700">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Booking Card */}
                        <div className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-20">
                            <div className="mb-6">
                                <p className="text-gray-600 text-sm">Price per night</p>
                                <p className="text-3xl font-bold text-gray-800">₹{homestay.price}</p>
                            </div>
                            <button className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg mb-3">
                                Book Now
                            </button>
                            <button className="w-full border-2 border-blue-500 text-blue-500 font-bold py-3 px-4 rounded-lg bg-white">
                                Add to Wishlist ❤️
                            </button>
                            <div className="mt-6 pt-6 border-t">
                                <h3 className="font-semibold text-gray-800 mb-3">Need Help?</h3>
                                <p className="text-sm text-gray-600 mb-3">Contact our support team for any queries.</p>
                                <button className="w-full text-blue-500 bg-blue-50 hover:bg-blue-100 px-4 py-3 rounded-lg font-semibold">Contact Support</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Details;