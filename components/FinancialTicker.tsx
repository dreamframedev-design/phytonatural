'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TrendingUp, DollarSign, BarChart3 } from 'lucide-react';

interface AnimatedValueProps {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    duration?: number;
}

function AnimatedValue({ value, prefix = '', suffix = '', decimals = 1, duration = 2 }: AnimatedValueProps) {
    const [displayValue, setDisplayValue] = useState(0);
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => latest.toFixed(decimals));

    useEffect(() => {
        const controls = animate(motionValue, value, {
            duration,
            ease: 'easeOut',
            onUpdate: (latest) => setDisplayValue(latest),
        });

        return controls.stop;
    }, [value, duration, motionValue]);

    return (
        <span className="ticker-value">
            {prefix}
            <motion.span>{displayValue.toFixed(decimals)}</motion.span>
            {suffix}
        </span>
    );
}

interface TickerItemProps {
    icon: React.ReactNode;
    label: string;
    children: React.ReactNode;
    delay?: number;
}

function TickerItem({ icon, label, children, delay = 0 }: TickerItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 hover:border-[#00C4B4]/30 hover:shadow-lg transition-all group"
        >
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#00C4B4]/10 to-[#008C8C]/10 group-hover:from-[#00C4B4]/20 group-hover:to-[#008C8C]/20 transition-colors">
                {icon}
            </div>
            <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">{label}</p>
                <p className="text-2xl font-bold text-slate-900">{children}</p>
            </div>
        </motion.div>
    );
}

export default function FinancialTicker() {
    return (
        <div className="space-y-4">
            <TickerItem
                icon={<TrendingUp className="w-5 h-5 text-[#008C8C]" />}
                label="Market Cap"
                delay={0.1}
            >
                <AnimatedValue value={556.1} prefix="$" suffix="M" />
            </TickerItem>

            <TickerItem
                icon={<BarChart3 className="w-5 h-5 text-[#008C8C]" />}
                label="Q3 Revenue"
                delay={0.2}
            >
                <AnimatedValue value={91.7} prefix="$" suffix="M" />
            </TickerItem>

            <TickerItem
                icon={<DollarSign className="w-5 h-5 text-[#008C8C]" />}
                label="Ticker Symbols"
                delay={0.3}
            >
                <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-100 text-sm font-mono font-semibold text-slate-700">
                        CSE: VREO
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-100 text-sm font-mono font-semibold text-slate-700">
                        OTCQX: VREOF
                    </span>
                </div>
            </TickerItem>
        </div>
    );
}
