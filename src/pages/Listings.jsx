import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/ui/Loader';
import Toast from '../components/ui/Toast';
import useApi from '../hooks/useApi';

const Listings = () => {
    const { data: homestays, loading, error } = useApi('/api/homestays');

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Homestay Listings</h1>
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader size={48} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(homestays || []).map((homestay) => (
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
                )}
            </div>
            <Footer />
            <Toast message={error || ''} variant="error" visible={Boolean(error)} />
        </div>
    );
};

export default Listings;
