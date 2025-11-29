import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-tronix-primary/20">
            <h2 className="text-5xl font-bold text-center mb-16 text-white tracking-tight">
                About <span className="text-tronix-primary">Tronix365</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        Tronix365 specializes in advanced industrial solutions, focusing on Robotics, Embedded Systems, and IoT. Our expertise spans the entire development cycle, from PCB design and development to full-scale R&D. We also provide comprehensive electronic guidance and services, alongside essential development support and training for engineering students.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-tronix-secondary pl-4 py-2">
                        Our vision is to empower the future of industry by delivering pioneering Robotics, Embedded, and IoT solutions, while simultaneously fostering a culture of practical innovation through comprehensive R&D and dedicated guidance for emerging engineering talent.
                    </p>
                </div>
                <div className="p-6 bg-tronix-dark/50 rounded-xl shadow-2xl shadow-tronix-secondary/20">
                    <h3 className="text-3xl font-bold text-tronix-primary mb-4">Our Commitment: Skill Mastery</h3>
                    <ul className="space-y-3 text-gray-400 text-base">
                        <li className="flex items-center"><span className="text-tronix-secondary mr-3">&#x27A4;</span> Sensor & Actuator Expertise</li>
                        <li className="flex items-center"><span className="text-tronix-secondary mr-3">&#x27A4;</span> Real-World Industrial Projects</li>
                        <li className="flex items-center"><span className="text-tronix-secondary mr-3">&#x27A4;</span> Comprehensive Engineering Solutions</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
