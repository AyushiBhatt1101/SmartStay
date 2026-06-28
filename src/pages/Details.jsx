import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/ui/Loader';
import Toast from '../components/ui/Toast';
import useApi from '../hooks/useApi';

const Details = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data: homestay, loading, error } = useApi(`/api/homestays/${id}`);

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow flex items-center justify-center py-20">
                    <Loader size={48} />
                </div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow container mx-auto p-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">Unable to load homestay details</h1>
                    <p className="mt-3 text-gray-600">{error}</p>
                    <button onClick={() => history.push('/listings')} className="mt-4 bg-blue-500 text-white py-2 px-6 rounded">Back to Listings</button>
                </div>
                <Footer />
                <Toast message={error} variant="error" visible />
            </div>
        );
    }

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
                    <div className="bg-gray-200 rounded-lg text-9xl text-center py-16 mb-6">{homestay.image}</div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">{homestay.name}</h1>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-yellow-500 text-lg">⭐ {homestay.rating}</span>
                                <span className="text-gray-600">({homestay.reviews} reviews)</span>
                            </div>
                            <p className="text-gray-600 text-lg mb-2">📍 {homestay.location}</p>
                            <p className="text-xl font-semibold text-blue-600 mb-6">₹{homestay.price} per night</p>

                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">About</h2>
                                <p className="text-gray-700 leading-relaxed">{homestay.description}</p>
                            </div>

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
            <Toast message={error || ''} variant="error" visible={Boolean(error)} />
        </div>
    );
};

export default Details;
