'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function ResearchSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={ref} id="research" className="relative overflow-hidden h-[800px] lg:h-[900px] flex items-center">
            {/* Parallax Background */}
            <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%]">
                <Image
                    src="/images/lab hero female scientist copy.webp"
                    alt="Research - Scientist in laboratory"
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-jet-black/90 via-jet-black/60 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-xl"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-strong-cyan" />
                        <span className="text-strong-cyan font-bold tracking-widest uppercase text-sm">Our Foundation</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                        Research
                    </h2>

                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal/20 rounded-full blur-[40px] group-hover:bg-teal/30 transition-all duration-500" />

                        <p className="text-lg md:text-xl text-slate-100 leading-relaxed font-light mb-6 relative z-10">
                            Through our Chapter 20 license and affiliation with a leading U.S. academic institution,
                            we bridge the gap between <strong className="text-white font-semibold">groundbreaking research</strong> and real-world impact.
                        </p>

                        <div className="text-lg md:text-xl text-slate-200 leading-relaxed font-light border-l-4 border-strong-cyan pl-6 relative z-10">
                            This unique collaboration enables us to drive the next generation of discoveries,
                            transforming health and improving lives worldwide.
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
