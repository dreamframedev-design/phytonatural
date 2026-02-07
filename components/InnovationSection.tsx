'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function InnovationSection() {
    return (
        <section id="innovation" className="relative h-[800px] lg:h-[900px] bg-jet-black overflow-hidden">
            {/* Curved Top Divider - Simple Gradient Fade */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white-smoke to-transparent z-10" />

            {/* Full-width image - No Dark Filter */}
            <div className="absolute inset-0">
                <Image
                    src="/images/phytonatural bud hero final web copy.webp"
                    alt="Innovation - Cannabis plant and product"
                    fill
                    className="object-cover object-[30%_center]"
                />
                {/* Subtle gradient on the LEFT to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-jet-black/60" />
            </div>

            {/* Content - Strictly Left Column (Grid Layout) */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 h-full">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col justify-center items-start text-left pt-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-[2px] w-12 bg-strong-cyan shadow-sm" />
                                <span className="text-strong-cyan font-bold tracking-widest uppercase text-sm drop-shadow-md">Future Forward</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-xl">
                                Innovation
                            </h2>

                            <p className="text-lg md:text-xl text-white leading-relaxed font-medium mb-8 drop-shadow-lg max-w-lg">
                                At the forefront of innovation, we are pioneering advanced research to unlock the
                                potential of cannabinoids in addressing some of the most pressing global health
                                challenges.
                            </p>

                            <div className="space-y-6 text-lg md:text-xl text-slate-100 font-light border-l-4 border-strong-cyan pl-6 bg-jet-black/40 p-6 rounded-r-2xl backdrop-blur-md shadow-xl max-w-xl">
                                <p className="drop-shadow-md">
                                    By combining <strong className="text-white font-bold">cutting-edge science</strong> with bold exploration,
                                    we aim to redefine possibilities in therapeutic solutions.
                                </p>
                                <p className="mb-0 drop-shadow-md">
                                    Our vision is to revolutionize pain management by providing innovative cannabis solutions
                                    as a <strong className="text-strong-cyan font-bold">safer, sustainable alternative to opioids</strong>.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Empty to show image */}
                    <div className="hidden lg:block" />

                </div>
            </div>

            {/* Bottom Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white-smoke to-transparent z-10" />
        </section>
    );
}
