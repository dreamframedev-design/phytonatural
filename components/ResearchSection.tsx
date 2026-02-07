'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ResearchSection() {
    return (
        <section id="research" className="relative overflow-hidden">
            {/* Top Divider - Simple Gradient Fade instead of shape */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white-smoke to-transparent z-10" />

            {/* Full-width image with text overlay */}
            <div className="relative h-[800px] lg:h-[900px]">
                <Image
                    src="/images/lab hero female scientist.jpg"
                    alt="Research - Scientist in laboratory"
                    fill
                    className="object-cover"
                />
                {/* Gradient overlay - Stronger on left */}
                <div className="absolute inset-0 bg-gradient-to-r from-jet-black/95 via-jet-black/70 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-xl pt-20"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[2px] w-12 bg-strong-cyan" />
                                <span className="text-strong-cyan font-bold tracking-widest uppercase text-sm">Our Foundation</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                                Research
                            </h2>

                            <p className="text-lg md:text-xl text-slate-100 leading-relaxed font-light mb-8 drop-shadow-md">
                                Through our Chapter 20 license and affiliation with a leading U.S. academic institution,
                                we bridge the gap between <strong className="text-white font-semibold">groundbreaking research</strong> and real-world impact.
                            </p>

                            <div className="text-lg md:text-xl text-slate-200 leading-relaxed font-light border-l-4 border-teal pl-6 bg-jet-black/30 p-4 rounded-r-2xl backdrop-blur-sm">
                                This unique collaboration enables us to drive the next generation of discoveries,
                                transforming health and improving lives worldwide.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Divider - Fade to Black */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-jet-black to-transparent z-10" />
        </section>
    );
}
