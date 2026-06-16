import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow container mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About SmartStay</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          SmartStay is a modern homestay management platform built to simplify bookings, guest communication,
          and property operations for hosts of every size.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our platform helps hosts increase occupancy with beautiful listings, reliable guest messaging, and easy insights.
          Whether you manage one home or a full portfolio, SmartStay keeps your rental business running smoothly.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
