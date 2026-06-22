import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Input, Modal, Toast, Loader } from '../components/ui';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toast, setToast] = useState({ visible: false, message: '', variant: 'success' });

    const stats = [
        { label: 'Total Bookings', value: '50', icon: '📅' },
        { label: 'Active Guests', value: '20', icon: '👥' },
        { label: 'Reviews', value: '15', icon: '⭐' },
        { label: 'Occupancy Rate', value: '75%', icon: '📊' },
    ];

    const recentBookings = [
        { id: 1, guest: 'John Doe', homestay: 'Mountain View', date: '2026-06-15', status: 'Confirmed' },
        { id: 2, guest: 'Jane Smith', homestay: 'Lakeside Retreat', date: '2026-06-16', status: 'Confirmed' },
        { id: 3, guest: 'Mike Johnson', homestay: 'Beachfront Villa', date: '2026-06-17', status: 'Pending' },
    ];

    const showToast = (message, variant = 'info') => {
        setToast({ visible: true, message, variant });
    };

    const closeToast = () => setToast((current) => ({ ...current, visible: false }));

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar />
            <div className="flex-grow container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl dark:bg-slate-900 dark:ring-1 dark:ring-white/5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{stat.label}</p>
                                    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
                                </div>
                                <div className="text-4xl">{stat.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
                    <div className="rounded-3xl bg-white p-6 shadow-lg dark:bg-slate-900 dark:ring-1 dark:ring-white/5">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Recent Bookings</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[480px] text-left">
                                <thead className="bg-gray-100 text-sm dark:bg-slate-800">
                                    <tr>
                                        <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Guest</th>
                                        <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Homestay</th>
                                        <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Date</th>
                                        <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentBookings.map((booking) => (
                                        <tr key={booking.id} className="border-t hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-800">
                                            <td className="px-4 py-3 text-gray-800 dark:text-gray-100">{booking.guest}</td>
                                            <td className="px-4 py-3 text-gray-800 dark:text-gray-100">{booking.homestay}</td>
                                            <td className="px-4 py-3 text-gray-800 dark:text-gray-100">{booking.date}</td>
                                            <td className="px-4 py-3">
                                                <span className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800 dark:bg-emerald-900/80 dark:text-emerald-100' : 'bg-yellow-100 text-yellow-800 dark:bg-amber-900/80 dark:text-amber-100'}`}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="rounded-3xl bg-white p-6 shadow-lg dark:bg-slate-900 dark:ring-1 dark:ring-white/5">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">UI Component Demo</h2>
                            <div className="space-y-5">
                                <div className="space-y-3">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Buttons</p>
                                    <div className="flex flex-wrap gap-3">
                                        <Button onClick={() => showToast('Primary action executed', 'success')}>Primary action</Button>
                                        <Button variant="secondary" onClick={() => setIsModalOpen(true)}>Open modal</Button>
                                        <Button variant="ghost" onClick={() => showToast('Ghost action shown', 'info')}>Ghost action</Button>
                                    </div>
                                </div>
                                <Input label="Search guest" placeholder="Search by name" onChange={() => {}} helpText="Demo input component" />
                                <div className="rounded-3xl border border-gray-200 p-4 dark:border-slate-700">
                                    <div className="flex items-center gap-3">
                                        <Loader />
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Loading dashboard metrics...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Edit booking settings"
                footer={
                    <div className="flex justify-end gap-3">
                        <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button onClick={() => {
                            setIsModalOpen(false);
                            showToast('Booking settings saved', 'success');
                        }}>
                            Save changes
                        </Button>
                    </div>
                }
            >
                <p className="text-gray-600 dark:text-gray-300">Use this modal for quick booking updates and settings review across your dashboard.</p>
            </Modal>
            <Toast visible={toast.visible} message={toast.message} variant={toast.variant} onClose={closeToast} />
            <Footer />
        </div>
    );
};

export default Dashboard;
