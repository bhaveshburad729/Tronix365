import React, { useState } from 'react';
import axios from 'axios';

const EnrollmentForm = ({ onRegisterSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:8000/api/register', formData);
            onRegisterSuccess(response.data);
        } catch (err) {
            setError(err.response?.data?.detail || 'Registration failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="enroll" className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-tronix-primary/20 mt-16">
            <h2 className="text-5xl font-bold text-center mb-12 text-white tracking-tight">
                Ready to <span className="text-tronix-secondary">Join?</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#111] p-8 rounded-xl shadow-2xl shadow-tronix-primary/20 border border-tronix-primary/30">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="mt-1 block w-full px-4 py-3 bg-tronix-dark border border-gray-600 rounded-lg text-white focus:ring-tronix-primary focus:border-tronix-primary transition duration-200"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@college.com"
                        required
                        className="mt-1 block w-full px-4 py-3 bg-tronix-dark border border-gray-600 rounded-lg text-white focus:ring-tronix-primary focus:border-tronix-primary transition duration-200"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="mt-1 block w-full px-4 py-3 bg-tronix-dark border border-gray-600 rounded-lg text-white focus:ring-tronix-primary focus:border-tronix-primary transition duration-200"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your College / Query (Optional)</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your background or any questions you have."
                        className="mt-1 block w-full px-4 py-3 bg-tronix-dark border border-gray-600 rounded-lg text-white focus:ring-tronix-primary focus:border-tronix-primary transition duration-200"
                    ></textarea>
                </div>

                {error && (
                    <div className="text-red-400 text-sm text-center font-medium">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-tronix-primary text-tronix-dark font-extrabold rounded-lg text-lg uppercase transition-all duration-300 hover:bg-white hover:text-tronix-secondary shadow-lg shadow-tronix-primary/40 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Processing...' : 'Submit Enrollment Request'}
                </button>
            </form>
        </section>
    );
};

export default EnrollmentForm;
