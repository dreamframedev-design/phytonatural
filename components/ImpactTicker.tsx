'use client';

import { motion } from 'framer-motion';

const TICKER_ITEMS = [
    "556M+ MARKET CAP",
    "CLINICAL GRADE RESEARCH",
    "VERTICALLY INTEGRATED PLATFORM",
    "SUSTAINABLE CULTIVATION",
    "SCIENCE-LED INNOVATION",
    "GLOBAL HEALTH SOLUTIONS"
];

export default function ImpactTicker() {
    return (
        <div className="w-full bg-jet-black/5 border-y border-teal/10 overflow-hidden py-4 relative z-20 backdrop-blur-sm">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear"
                    }}
                    className="flex gap-16 items-center"
                >
                    {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-dark-teal/80 font-bold tracking-[0.2em] text-sm uppercase">
                                {item}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-strong-cyan/40" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
