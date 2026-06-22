import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
    };

    return (
        <nav className="bg-gray-800 p-4 dark:bg-slate-900">
            <div className="container mx-auto flex flex-wrap justify-between items-center gap-3">
                <Link to="/" className="text-white text-lg font-bold hover:text-gray-300">SmartStay</Link>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    <Link to="/listings" className="text-white hover:text-gray-300">Listings</Link>
                    <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
                    <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                    <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
                    <button onClick={toggleTheme} className="rounded-lg bg-white/10 px-3 py-2 text-white transition hover:bg-white/20">
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
