import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex flex-wrap justify-between items-center gap-3">
                <Link to="/" className="text-white text-lg font-bold hover:text-gray-300">SmartStay</Link>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    <Link to="/listings" className="text-white hover:text-gray-300">Listings</Link>
                    <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
                    <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                    <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
                    <button className="text-white hover:text-gray-300">Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;