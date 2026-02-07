'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Microscope, Globe, TrendingUp } from 'lucide-react';

export default function BentoGrid() {
    return (
        <section className="py-24 bg-jet-black relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/images/phyto%20logos_icon.svg')] bg-no-repeat bg-center opacity-[0.03] scale-[2] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        The Phyto <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-strong-cyan">Standard</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                        Setting the global benchmark for cannabis research, cultivation, and therapeutic innovation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Card 1: Large - Clinical Grade */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 row-span-2 rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/20 rounded-full blur-[80px] group-hover:bg-teal/30 transition-all duration-500" />
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mb-6 text-teal">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Chapter 20 License</h3>
                                <p className="text-slate-400 text-lg">
                                    One of the few globally licensed entities authorized for full-spectrum research and cultivation.
                                </p>
                            </div>
                            <div className="mt-8">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-semibold border border-teal/20">
                                    <ShieldCheck className="w-4 h-4" />
                                    Exclusive Authority
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Tall - Market Cap */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 row-span-2 rounded-3xl p-8 bg-gradient-to-b from-dark-teal/40 to-jet-black border border-white/10 backdrop-blur-md relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0" />
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <div className="mb-auto">
                                <div className="w-12 h-12 rounded-full bg-strong-cyan/20 flex items-center justify-center mb-6 text-strong-cyan">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="text-5xl font-bold text-white mb-2 tracking-tight">
                                $556M+
                            </div>
                            <p className="text-strong-cyan font-medium text-lg mb-4">Market Cap</p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                A financially robust foundation positioning us as a dominant force in the global market.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Medium - Research */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group"
                    >
                        <div className="absolute -right-4 -bottom-4 text-white/5 rotate-12 transform group-hover:scale-110 transition-transform duration-500">
                            <Microscope className="w-32 h-32" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">Academic Partners</h3>
                            <p className="text-slate-400">Collaborating with top-tier universities to validate therapeutic efficacy.</p>
                        </div>
                    </motion.div>

                    {/* Card 4: Medium - Global */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <Globe className="w-8 h-8 text-teal" />
                                <ArrowUpRight className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Global Export</h3>
                            <p className="text-slate-400">Infrastructure ready for international distribution.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
