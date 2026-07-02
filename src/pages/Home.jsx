import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomestayCard from '../components/HomestayCard';
import Loader from '../components/ui/Loader';
import Toast from '../components/ui/Toast';
import useApi from '../hooks/useApi';

const Home = () => {
    const { data, loading, error } = useApi('/api/homestays');
    const featuredStays = data ? data.slice(0, 3) : [];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <main className="flex-grow container mx-auto px-6 py-16">
                <section className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Homestays</h2>
                        <p className="text-blue-600 mt-2"> Discover unique stays across India.</p>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Explore our top homestays, all designed to make your next stay comfortable and memorable.
                        </p>
                    </div>
                    {loading ? (
                        <div className="flex justify-center py-14">
                            <Loader size={48} />
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {featuredStays.map((stay) => (
                                <HomestayCard key={stay._id} _id={stay._id} name={stay.name} location={stay.location} price={`₹${stay.price}`} />
                            ))}
                        </div>
                    )}
                </section>

                <section className="grid gap-6 lg:grid-cols-3">
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Easy Booking</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Simplify guest bookings with a clean experience and fast reservation workflow.
                        </p>
                    </div>
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Responsive Design</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our layout adjusts seamlessly across mobile, tablet, and desktop screens.
                        </p>
                    </div>
                    <div className="bg-white rounded-3xl p-8 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Host Insights</h3>
                        <p className="text-gray-600 leading-relaxed">
                            View key insights for your homestay and keep your guests returning again and again.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
            <Toast message={error || ''} variant="error" visible={Boolean(error)} />
        </div>
    );
};

export default Home;