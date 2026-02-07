'use client';

import { motion } from 'framer-motion';
import { Leaf, Download, TrendingUp, BarChart3, Building2, FlaskConical, Stethoscope, DollarSign } from 'lucide-react';
import Image from 'next/image';

export default function DealOnePager() {
    const handleDownload = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-slate-100 py-12 px-4 flex flex-col items-center print:bg-white print:py-0 print:px-0">
            {/* Download Button - Hidden on print */}
            <div className="w-full max-w-[816px] mb-6 print:hidden">
                <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00C4B4] to-[#008C8C] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                </motion.button>
            </div>

            {/* The Document Canvas - Fixed 8.5" x 11" aspect ratio (816px x 1056px) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-2xl print:shadow-none print:w-full print:h-full relative"
                style={{
                    width: '816px',
                    height: '1056px',
                    padding: '48px',
                    boxSizing: 'border-box',
                }}
            >
                {/* HEADER - Dual Brand Lockup */}
                <header className="flex justify-between items-end mb-4">
                    {/* PhytoNatural Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00C4B4] to-[#008C8C] flex items-center justify-center">
                            <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-[#008C8C]">
                            PhytoNatural
                        </span>
                    </div>

                    {/* Vireo Logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/images/vireo_logo_notext-768x455-1.png"
                            alt="Vireo Growth Inc."
                            width={44}
                            height={26}
                            className="h-6 w-auto opacity-70"
                        />
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                            Vireo Growth Inc.
                        </span>
                    </div>
                </header>

                {/* Gradient Divider */}
                <div className="h-[2px] w-full bg-gradient-to-r from-[#00C4B4] to-[#008C8C] mb-6" />

                {/* MAIN GRID - Flexbox for reliable layout */}
                <div className="flex gap-6" style={{ height: 'calc(100% - 140px)' }}>
                    {/* LEFT COLUMN - The Narrative (2/3 width) */}
                    <div className="flex-[2] min-w-0 flex flex-col">
                        <h1 className="font-serif text-[28px] text-slate-900 mb-5 leading-tight">
                            Physician-Founded.{' '}
                            <span className="text-[#008C8C]">Patient-Focused.</span>
                        </h1>

                        {/* About Vireo */}
                        <div className="mb-4">
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <Building2 className="w-3.5 h-3.5 text-[#008C8C]" />
                                <h2 className="text-[10px] font-bold text-[#008C8C] uppercase tracking-widest">
                                    About Vireo
                                </h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-[12px]">
                                Vireo Growth Inc. which operates through its subsidiary, Vireo Health, is a public company,
                                listed on the Canadian Securities Exchange (the "CSE") and quoted on the OTCQX under the
                                ticker symbols "VREO" and "VREOF".
                            </p>
                        </div>

                        {/* Vireo's Medical Focus */}
                        <div className="mb-4">
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <Stethoscope className="w-3.5 h-3.5 text-[#008C8C]" />
                                <h2 className="text-[10px] font-bold text-[#008C8C] uppercase tracking-widest">
                                    Vireo's Medical Focus
                                </h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-[12px]">
                                Vireo is a physician-founded, patient-focused company that integrates best-in-class medical,
                                scientific, and engineering practices into the development of its products and patient care
                                practices. Vireo's founder, <strong>Kyle Kingsley, MD</strong>, is a board-certified emergency
                                medicine physician, serial entrepreneur, and inventor. He was inspired to launch Vireo after
                                encountering numerous patients who successfully used cannabis to effectively alleviate their
                                pain and suffering. Vireo's team includes physicians, scientists, and horticulturists that
                                have been successful in a variety of settings and who bring a broad spectrum of experience
                                in best practices and evidence-based medicine.
                            </p>
                        </div>

                        {/* Research Focus */}
                        <div className="mb-4">
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <FlaskConical className="w-3.5 h-3.5 text-[#008C8C]" />
                                <h2 className="text-[10px] font-bold text-[#008C8C] uppercase tracking-widest">
                                    Vireo's Focus on Research
                                </h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-[12px]">
                                High-quality research is the key for Vireo in reaching its goals as a business. The opportunity
                                for Vireo to expand its research focus through this Research Partnership with{' '}
                                <strong>University of Pittsburgh School of Medicine</strong> is highly attractive and represents
                                a strong strategic fit.
                            </p>
                        </div>

                        {/* Operational Footprint */}
                        <div className="mb-4">
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <Building2 className="w-3.5 h-3.5 text-[#008C8C]" />
                                <h2 className="text-[10px] font-bold text-[#008C8C] uppercase tracking-widest">
                                    Vireo's Operational Footprint
                                </h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed text-[12px]">
                                The Company operates cultivation, production, and dispensary facilities in multiple States.
                                <strong> Pennsylvania</strong> is Vireo's current focus for strategic expansion.
                            </p>
                        </div>

                        {/* Spacer to push footer down */}
                        <div className="flex-1" />
                    </div>

                    {/* RIGHT COLUMN - Financial Sidebar (1/3 width) */}
                    <div className="flex-1 min-w-[220px]">
                        <div className="bg-slate-50 rounded-lg p-5 border border-slate-100 h-full flex flex-col">
                            <div className="flex items-center gap-1.5 mb-5">
                                <DollarSign className="w-3.5 h-3.5 text-[#008C8C]" />
                                <h3 className="text-[10px] font-bold text-[#008C8C] tracking-widest">
                                    FINANCIAL PERFORMANCE
                                </h3>
                            </div>

                            {/* Market Cap */}
                            <div className="mb-5">
                                <p className="text-[9px] text-slate-400 uppercase tracking-wider mb-1">
                                    Market Cap (Feb 2026)
                                </p>
                                <p className="text-[36px] font-bold text-[#008C8C] leading-none">
                                    $556.1M
                                </p>
                            </div>

                            {/* Q3 Revenue */}
                            <div className="mb-4">
                                <p className="text-[9px] text-slate-400 uppercase tracking-wider mb-0.5">
                                    Q3 2025 Revenue
                                </p>
                                <p className="text-xl font-semibold text-slate-700">
                                    $91.7M
                                </p>
                            </div>

                            {/* Profitability */}
                            <div className="mb-4">
                                <p className="text-[9px] text-slate-400 uppercase tracking-wider mb-0.5">
                                    Q3 2025 Profitability
                                </p>
                                <p className="text-xl font-semibold text-slate-700">
                                    $25.4M
                                </p>
                            </div>

                            {/* 9-Month Performance */}
                            <div className="mb-4 p-3 bg-white rounded-lg border border-slate-100">
                                <p className="text-[9px] text-slate-400 uppercase tracking-wider mb-1.5">
                                    9 Months Ended Sept 30, 2025
                                </p>
                                <div className="space-y-1 text-[12px]">
                                    <p className="text-slate-700">
                                        Revenue: <strong className="text-slate-900">$164.3M</strong>
                                    </p>
                                    <p className="text-slate-700">
                                        Adj. EBITDA: <strong className="text-slate-900">$45.2M</strong>
                                    </p>
                                </div>
                            </div>

                            {/* Credit Ranking */}
                            <p className="text-[11px] text-slate-600 mb-4 leading-relaxed">
                                Ranked <strong>top of industry</strong> in credit rankings from
                                Viridian Capital Advisors with very low debt leverage.
                            </p>

                            {/* Spacer */}
                            <div className="flex-1" />

                            {/* Divider */}
                            <div className="h-px bg-slate-200 my-3" />

                            {/* Ticker Symbols */}
                            <div className="space-y-1.5">
                                <div className="font-mono text-[11px] text-slate-500 flex items-center gap-2">
                                    <TrendingUp className="w-3.5 h-3.5" />
                                    <span>CSE: VREO</span>
                                </div>
                                <div className="font-mono text-[11px] text-slate-500 flex items-center gap-2">
                                    <BarChart3 className="w-3.5 h-3.5" />
                                    <span>OTCQX: VREOF</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER - Positioned at bottom */}
                <footer className="absolute bottom-12 left-12 right-12 pt-4 border-t border-slate-200">
                    <div className="flex justify-between items-center text-[9px] text-slate-400">
                        <p>Confidential — For Authorized Partners Only</p>
                        <p>© {new Date().getFullYear()} PhytoNatural × Vireo Growth Inc.</p>
                    </div>
                </footer>
            </motion.div>
        </div>
    );
}
