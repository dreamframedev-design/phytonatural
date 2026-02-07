import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-jet-black flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/images/phyto%20logos_icon.svg')] bg-no-repeat bg-center opacity-[0.03] scale-[3] pointer-events-none" />

            <div className="relative z-10 text-center max-w-lg mx-auto">
                <h1 className="text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none select-none">
                    404
                </h1>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Page Not Found
                </h2>

                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal to-strong-cyan text-white font-bold rounded-full shadow-lg shadow-teal/20 hover:scale-105 transition-all duration-300 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Return Home
                </Link>
            </div>
        </div>
    );
}
