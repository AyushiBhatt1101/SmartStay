import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
    const stats = [
        { label: 'Total Bookings', value: '50', icon: '📅', color: 'blue' },
        { label: 'Active Guests', value: '20', icon: '👥', color: 'green' },
        { label: 'Reviews', value: '15', icon: '⭐', color: 'yellow' },
        { label: 'Occupancy Rate', value: '75%', icon: '📊', color: 'purple' },
    ];

    const recentBookings = [
        { id: 1, guest: 'John Doe', homestay: 'Mountain View', date: '2026-06-15', status: 'Confirmed' },
        { id: 2, guest: 'Jane Smith', homestay: 'Lakeside Retreat', date: '2026-06-16', status: 'Confirmed' },
        { id: 3, guest: 'Mike Johnson', homestay: 'Beachfront Villa', date: '2026-06-17', status: 'Pending' },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Dashboard</h1>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm font-semibold">{stat.label}</p>
                                    <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                                </div>
                                <div className="text-4xl">{stat.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Bookings */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Bookings</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 text-left font-semibold">Guest</th>
                                    <th className="px-4 py-2 text-left font-semibold">Homestay</th>
                                    <th className="px-4 py-2 text-left font-semibold">Date</th>
                                    <th className="px-4 py-2 text-left font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentBookings.map((booking) => (
                                    <tr key={booking.id} className="border-t hover:bg-gray-50">
                                        <td className="px-4 py-3">{booking.guest}</td>
                                        <td className="px-4 py-3">{booking.homestay}</td>
                                        <td className="px-4 py-3">{booking.date}</td>
                                        <td className="px-4 py-3">
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;