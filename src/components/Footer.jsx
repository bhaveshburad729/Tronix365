import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-tronix-dark/80 border-t border-tronix-secondary/20 py-12 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Brand & Copyright */}
                    <div>
                        <p className="text-2xl font-bold text-tronix-primary mb-4">Tronix365</p>
                        <p className="text-sm text-gray-400 mb-2">Specializing in Sensors, Actuators, and Advanced Industrial Projects.</p>
                        <p className="text-sm text-gray-600">&copy; 2025 Tronix365. All rights reserved.</p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                        <p className="text-gray-400 mb-2">
                            <span className="block text-tronix-secondary text-sm">Email:</span>
                            <a href="mailto:shubham.tronix365@gmail.com" className="hover:text-white transition-colors">shubham.tronix365@gmail.com</a>
                        </p>
                        <p className="text-gray-400">
                            <span className="block text-tronix-secondary text-sm">Phone:</span>
                            <a href="tel:+918830153805" className="hover:text-white transition-colors">+91 88301 53805</a>
                        </p>
                    </div>

                    {/* Address & CEO */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Visit Us</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Tronix365, near Stanza living,<br />
                            behind Datta Mandir, Vadgaon Budruk,<br />
                            Pune, Maharashtra 411041
                        </p>
                        <div className="border-t border-gray-800 pt-4 mt-4">
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Founder & CEO</p>
                            <p className="text-tronix-primary font-medium">Shubham Ubale</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
