'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-20 overflow-hidden bg-white-smoke flex items-center">
            {/* Background Gradient Mesh - Softer & Slower */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-strong-cyan/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-teal/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '1s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
                <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="relative"
                    >
                        <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white border border-teal/20 shadow-sm backdrop-blur-sm">
                            <span className="text-sm font-semibold tracking-wider text-teal uppercase">Next Generation Science</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-jet-black leading-[1.1] mb-8">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dark-teal to-teal pb-2">Research.</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal to-strong-cyan pb-2">Innovation.</span>
                            <span className="block text-strong-cyan">Integration.</span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-lg mb-10 leading-relaxed font-light">
                            Advancing global health through research, innovation, and a full vertically integrated
                            cannabis production platform.
                        </p>

                        {/* Fixed CTAs - High Contrast Text */}
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a
                                href="#research"
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-jet-black text-white font-bold text-base rounded-full shadow-xl shadow-teal/10 hover:shadow-teal/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-teal to-strong-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 tracking-wide">Learn More</span>
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-jet-black font-bold text-base rounded-full hover:border-teal hover:bg-slate-50 hover:text-teal hover:-translate-y-1 transition-all duration-300 shadow-sm"
                            >
                                Contact Us
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Large Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-square drop-shadow-2xl">
                            <Image
                                src="/images/phyto logos_icon.svg"
                                alt="PhytoNatural Icon"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
