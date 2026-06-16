import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar />
            <main className="flex-grow flex items-center justify-center px-4 py-16">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-3 text-gray-900 text-center">Login to SmartStay</h2>
                    <p className="text-gray-600 mb-8 text-center">
                        Access your host dashboard, view bookings, and keep your homestay running smoothly.
                    </p>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-3"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                            Login
                        </button>
                    </form>
                    <p className="mt-6 text-center text-gray-600">
                        Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Login;