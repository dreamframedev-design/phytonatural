'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PlatformSection() {
    return (
        <section id="platform" className="py-24 lg:py-32 bg-white-smoke relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-teal/5 rounded-full blur-[80px]" />
            <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-strong-cyan/5 rounded-full blur-[80px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Circular Image - Magnetic Hover */}
                    <motion.div
                        initial={{ opacity: 0, x: -40, rotate: -5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="relative"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                        <div className="relative w-full max-w-[550px] mx-auto aspect-square cursor-pointer">
                            {/* Circular clip */}
                            <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="/images/phyto building final.jpg"
                                    alt="PhytoNatural production facility"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Decorative rings - using brand colors */}
                            <div className="absolute -inset-4 rounded-full border-2 border-teal/30 z-[-1]" />
                            <div className="absolute -inset-8 rounded-full border border-strong-cyan/20 z-[-2]" />
                        </div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[2px] w-12 bg-dark-teal" />
                            <span className="text-dark-teal font-bold tracking-widest uppercase text-sm">Vertical Integration</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-jet-black mb-10 leading-tight">
                            Platform
                        </h2>

                        <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-light">
                            <p>
                                PhytoNatural's <strong className="text-dark-teal font-semibold">full vertically integrated cannabis business model</strong> is
                                redefining excellence in the industry. From state-of-the-art cultivation facilities to
                                cutting-edge product innovation and a network of premium retail stores, we
                                seamlessly manage every step of the cannabis journey.
                            </p>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-teal relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                                <p>
                                    Our cultivation practices are grounded in precision and sustainability, delivering
                                    a consistent supply of premium-quality cannabis that sets us apart.
                                </p>
                            </div>

                            <p>
                                By maintaining full control of our supply chain, we ensure unparalleled quality,
                                efficiency, and adaptability, positioning PhytoNatural as a market leader poised
                                for growth in a dynamic industry.
                            </p>
                        </div>

                        <motion.a
                            href="#contact"
                            whileHover={{ x: 5 }}
                            className="inline-flex items-center gap-2 mt-10 text-teal font-semibold text-lg group"
                        >
                            Discover Our process
                            <span className="block h-[2px] w-8 bg-teal group-hover:w-12 transition-all" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
