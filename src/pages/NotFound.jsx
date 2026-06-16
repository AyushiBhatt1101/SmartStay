import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center bg-gray-100 px-6 py-20">
                <div className="text-center">
                    <p className="text-6xl font-bold text-blue-600">404</p>
                    <h1 className="mt-4 text-3xl font-semibold text-gray-900">Page Not Found</h1>
                    <p className="mt-3 text-gray-600">The page you are looking for does not exist or has been moved.</p>
                    <Link
                        to="/"
                        className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Back to Home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
