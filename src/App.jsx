import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Syllabus from './components/Syllabus';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-tronix-dark text-gray-100 font-sans tech-bg min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Highlights />
                <Syllabus />
                <Pricing />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
