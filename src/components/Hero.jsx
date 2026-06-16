import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm uppercase tracking-widest text-blue-100">Trusted homestay management</p>
      <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">Manage your homestay with confidence</h1>
      <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
        SmartStay helps hosts and guests connect smoothly with powerful booking tools, easy communication, and smart property insights.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/listings"
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-blue-700 font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Browse Listings
        </Link>
        <Link
          to="/login"
          className="inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-white font-semibold hover:bg-white hover:text-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
