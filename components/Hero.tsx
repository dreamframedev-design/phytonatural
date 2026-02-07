'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ImpactTicker from './ImpactTicker';

export default function Hero() {
    return (
        <section className="relative min-h-[110vh] pt-20 overflow-hidden bg-white-smoke flex flex-col justify-center">
            {/* Background Animated Gradient Mesh - "Alive" */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-strong-cyan/20 rounded-full blur-[80px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        x: [0, 100, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-teal/20 rounded-full blur-[100px]"
                />
            </div>

            {/* 3D Depth Logo - Massive Background Element */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.12, scale: 1, rotate: 360 }}
                transition={{
                    opacity: { duration: 2 },
                    scale: { duration: 2 },
                    rotate: { duration: 120, repeat: Infinity, ease: "linear" }
                }}
                className="absolute right-[-10%] top-[10%] w-[1200px] h-[1200px] pointer-events-none z-0"
            >
                <Image
                    src="/images/phyto logos_icon.svg"
                    alt=""
                    fill
                    className="object-contain"
                />
            </motion.div>


            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-12 lg:py-20 flex-grow flex items-center">
                <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20 w-full">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="relative"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/60 border border-teal/20 shadow-sm backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-strong-cyan animate-pulse" />
                            <span className="text-xs font-bold tracking-widest text-dark-teal uppercase">Next Generation Science</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-jet-black leading-[1.05] mb-8">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-dark-teal to-teal"
                            >
                                Research.
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 }}
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-teal to-strong-cyan"
                            >
                                Innovation.
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="block text-jet-black"
                            >
                                Integration.
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-xl md:text-2xl text-slate-600 max-w-lg mb-12 leading-relaxed font-light"
                        >
                            Advancing global health through a fully vertically integrated
                            cannabis production platform.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <a
                                href="#research"
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-jet-black text-white font-bold text-base rounded-full shadow-2xl shadow-teal/20 hover:scale-105 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-teal to-strong-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 tracking-wide">Learn More</span>
                            </a>
                            <a
                                href="#contact"
                                className="group inline-flex items-center justify-center px-8 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-200 text-jet-black font-bold text-base rounded-full hover:border-teal hover:bg-white hover:text-teal hover:scale-105 transition-all duration-300"
                            >
                                Contact Us
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right: Focusing on the "Science" aspect - The Image Card */}
                    <div className="hidden lg:block relative">
                        {/* We removed the icon here because it's now a massive background element. 
                             Instead, we let the text breathe or could place a simplified graphic if needed.
                             For now, let's keep the layout balanced by leaving this space open for the background logo to shine through.
                         */}
                    </div>
                </div>
            </div>

            {/* Ticker at the bottom */}
            <ImpactTicker />
        </section>
    );
}
