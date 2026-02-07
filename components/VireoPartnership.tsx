'use client';

import { motion } from 'framer-motion';
import { Handshake, GraduationCap, Users, ExternalLink } from 'lucide-react';
import FinancialTicker from './FinancialTicker';

export default function VireoPartnership() {
    return (
        <section id="investors" className="section-padding swiss-border-bottom bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-[#008C8C] uppercase tracking-widest mb-4">
                        Strategic Partnership
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                        Vireo Growth Inc.
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Partnership Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-2 clinic-card p-8 lg:p-10"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#00C4B4] to-[#008C8C]">
                                <Handshake className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">Strategic Alliance</h3>
                                <p className="text-slate-500">Vireo Growth Inc.</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                                <Users className="w-6 h-6 text-[#008C8C] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Physician-Founded, Patient-Focused</h4>
                                    <p className="text-slate-600 leading-relaxed font-serif">
                                        Our leadership team combines decades of clinical experience with pharmaceutical innovation,
                                        ensuring every botanical formulation meets rigorous medical standards and delivers
                                        quantifiable patient outcomes.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                                <GraduationCap className="w-6 h-6 text-[#008C8C] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Research Partnership</h4>
                                    <p className="text-slate-600 leading-relaxed font-serif">
                                        University of Pittsburgh School of Medicine
                                    </p>
                                    <p className="text-slate-500 text-sm mt-2">
                                        Collaborative research programs advancing the science of botanical therapeutics
                                        with peer-reviewed clinical trials and evidence-based protocols.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                        >
                            <span>Request Investor Deck</span>
                            <ExternalLink className="w-4 h-4" />
                        </motion.a>
                    </motion.div>

                    {/* Financial Ticker Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="clinic-card p-6 lg:p-8 h-fit"
                    >
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Live Market Data</h3>
                        <FinancialTicker />
                        <p className="text-xs text-slate-400 mt-6 text-center">
                            Data updated quarterly • As of Q3 2024
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
