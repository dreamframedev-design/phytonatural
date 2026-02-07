'use client';

import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative bg-jet-black text-white overflow-hidden">

            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/phytofooter.png"
                    alt="Footer Background"
                    fill
                    className="object-cover object-center opacity-100"
                    priority={false}
                />
                {/* Gradient Overlay - Left to Right (Dark to Transparent) ensures text readability on Left */}
                <div className="absolute inset-0 bg-gradient-to-r from-jet-black via-jet-black/80 to-transparent" />
            </div>


            {/* Content Container - Constrained to Left Side */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left Column: All Content */}
                    <div className="flex flex-col gap-12">

                        {/* Brand Info */}
                        <div className="max-w-md">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="relative h-12 w-12 shrink-0">
                                    <img
                                        src="/images/phyto logos_icon.svg"
                                        alt="PhytoNatural Icon"
                                        className="w-full h-full object-contain brightness-0 invert"
                                    />
                                </div>
                                <div className="relative h-6 w-36">
                                    <img
                                        src="/images/wordmark final123.svg"
                                        alt="PhytoNatural"
                                        className="w-full h-full object-contain object-left brightness-0 invert"
                                    />
                                </div>
                            </div>
                            <p className="text-slate-200 text-lg font-light leading-relaxed">
                                Advancing global health through research, innovation, and integration.
                            </p>
                        </div>

                        {/* Links Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 text-sm">
                            <div>
                                <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs border-b border-teal/50 pb-2 inline-block">Platform</h4>
                                <ul className="space-y-3">
                                    <li><a href="#platform" className="text-slate-300 hover:text-strong-cyan transition-colors block py-0.5">Cultivation</a></li>
                                    <li><a href="#innovation" className="text-slate-300 hover:text-strong-cyan transition-colors block py-0.5">Processing</a></li>
                                    <li><a href="#innovation" className="text-slate-300 hover:text-strong-cyan transition-colors block py-0.5">Product Dev</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs border-b border-teal/50 pb-2 inline-block">Company</h4>
                                <ul className="space-y-3">
                                    <li><a href="/deal" className="text-slate-300 hover:text-strong-cyan transition-colors block py-0.5">Investors</a></li>
                                    <li><a href="#contact" className="text-slate-300 hover:text-strong-cyan transition-colors block py-0.5">Contact</a></li>
                                    <li><a href="#" className="text-slate-300 hover:text-strong-cyan transition-colors block py-0.5">Careers</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs border-b border-teal/50 pb-2 inline-block">Connect</h4>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-slate-300 hover:text-strong-cyan transition-colors block py-0.5">LinkedIn</a></li>
                                    <li><a href="#" className="text-slate-300 hover:text-strong-cyan transition-colors block py-0.5">Twitter</a></li>
                                    <li><a href="#" className="text-slate-300 hover:text-strong-cyan transition-colors block py-0.5">Instagram</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 text-xs text-slate-400">
                            <p>© {new Date().getFullYear()} PhytoNatural. All rights reserved.</p>
                            <nav className="flex gap-6">
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            </nav>
                        </div>

                    </div>

                    {/* Right Column: Empty to show background image logo */}
                    <div className="hidden lg:block">
                        {/* Spacer for background image visibility */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
