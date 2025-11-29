import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-tronix-dark/90 backdrop-blur-sm shadow-lg shadow-tronix-primary/10">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <a href="#" className="text-3xl font-bold text-tronix-primary animate-pulseFade">
                    Tronix365<span className="text-tronix-secondary">.</span>
                </a>
                <div className="hidden md:flex space-x-8 text-lg">
                    <a href="#internship" className="hover:text-tronix-primary transition duration-300">Internship</a>
                    <a href="#syllabus" className="hover:text-tronix-primary transition duration-300">Syllabus</a>
                    <a href="#about" className="hover:text-tronix-primary transition duration-300">About Us</a>
                    <a href="#pricing" className="hover:text-tronix-primary transition duration-300">Pricing</a>
                    <a href="#contact" className="hover:text-tronix-primary transition duration-300">Enroll</a>
                </div>
                <button
                    id="menu-button"
                    className="md:hidden text-tronix-primary focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </nav>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-tronix-dark p-4 border-t border-tronix-primary/20">
                    <a href="#internship" className="block py-2 text-center hover:text-tronix-primary transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>Internship</a>
                    <a href="#syllabus" className="block py-2 text-center hover:text-tronix-primary transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>Syllabus</a>
                    <a href="#about" className="block py-2 text-center hover:text-tronix-primary transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                    <a href="#pricing" className="block py-2 text-center hover:text-tronix-primary transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                    <a href="#contact" className="block py-2 text-center hover:text-tronix-primary transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>Enroll</a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
