import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const targetDate = new Date("December 22, 2025 00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setHasStarted(true);
                setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({
                    days: days.toString().padStart(2, '0'),
                    hours: hours.toString().padStart(2, '0'),
                    minutes: minutes.toString().padStart(2, '0'),
                    seconds: seconds.toString().padStart(2, '0'),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
            <div className="text-center max-w-4xl px-4 z-10">
                <h1 id="hero-title" className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 uppercase tracking-tighter leading-none text-white">
                    40-Day Embedded & IoT Internship
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
                    Transforming Students into Industry-Ready Engineers. <span className="text-tronix-primary font-medium">100% Hands-on.</span>
                </p>

                {/* Countdown Timer */}
                <div className="bg-tronix-dark/70 p-6 rounded-xl shadow-2xl shadow-tronix-primary/20 border border-tronix-primary/30 mb-10 mx-auto max-w-lg">
                    <p className="text-xl font-semibold mb-2 text-tronix-secondary">Program Starts In:</p>
                    {hasStarted ? (
                        <div className="text-center">
                            <span className='text-2xl text-red-500 font-bold'>The Program Has Started!</span>
                        </div>
                    ) : (
                        <div id="countdown" className="flex justify-center space-x-4">
                            <div className="flex flex-col items-center">
                                <span className="text-4xl lg:text-5xl font-mono font-bold text-tronix-primary">{timeLeft.days}</span>
                                <span className="text-sm uppercase text-gray-400">Days</span>
                            </div>
                            <div className="text-4xl lg:text-5xl text-gray-600">:</div>
                            <div className="flex flex-col items-center">
                                <span className="text-4xl lg:text-5xl font-mono font-bold text-tronix-primary">{timeLeft.hours}</span>
                                <span className="text-sm uppercase text-gray-400">Hours</span>
                            </div>
                            <div className="text-4xl lg:text-5xl text-gray-600">:</div>
                            <div className="flex flex-col items-center">
                                <span className="text-4xl lg:text-5xl font-mono font-bold text-tronix-primary">{timeLeft.minutes}</span>
                                <span className="text-sm uppercase text-gray-400">Minutes</span>
                            </div>
                            <div className="text-4xl lg:text-5xl text-gray-600">:</div>
                            <div className="flex flex-col items-center">
                                <span className="text-4xl lg:text-5xl font-mono font-bold text-tronix-primary">{timeLeft.seconds}</span>
                                <span className="text-sm uppercase text-gray-400">Seconds</span>
                            </div>
                        </div>
                    )}
                    <p className="text-lg mt-3 font-medium text-gray-300">Starting Date: Dec 22nd</p>
                </div>

                <a href="#pricing" className="inline-block py-4 px-12 bg-tronix-primary text-tronix-dark font-extrabold text-xl rounded-full uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-tronix-primary/50 hover:bg-white hover:text-tronix-secondary">
                    Secure Your Seat Now
                </a>
            </div>

            {/* Background element */}
            <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #00f7ff10, transparent 70%)' }}></div>
            </div>
        </section>
    );
};

export default Hero;
