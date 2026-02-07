'use client';

import { motion, Variants } from 'framer-motion';
import { Stethoscope, Dna, MapPin } from 'lucide-react';


const features = [
    {
        icon: Stethoscope,
        title: 'Physician Led',
        subtitle: 'Dr. Kyle Kingsley, M.D.',
        description:
            'Founded by physicians who understand the intersection of traditional botanical medicine and modern clinical standards. Our medical leadership ensures every product meets healthcare-grade quality protocols.',
    },
    {
        icon: Dna,
        title: 'Clinical Research',
        subtitle: 'Evidence-Based Products',
        description:
            'Every formulation undergoes rigorous clinical evaluation with standardized dosing, bioavailability testing, and documented efficacy outcomes. We publish peer-reviewed research to advance the field.',
    },
    {
        icon: MapPin,
        title: 'Operational Scale',
        subtitle: 'Multi-State Production',
        description:
            'Vertically integrated cultivation and manufacturing across multiple licensed facilities. From seed to shelf, we control quality at every stage of the therapeutic supply chain.',
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
    },
};



export default function ScienceGrid() {
    return (
        <section id="methodology" className="section-padding bg-white swiss-border-bottom">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-[#008C8C] uppercase tracking-widest mb-4">
                        Our Approach
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                        The Science
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-serif">
                        Unifying botanical wisdom with pharmaceutical rigor to create therapeutics
                        that physicians trust and patients deserve.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid md:grid-cols-3 gap-0"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isLast = index === features.length - 1;

                        return (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                className={`p-8 lg:p-10 group hover:bg-slate-50 transition-colors ${!isLast ? 'swiss-border-right' : ''
                                    }`}
                            >
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4B4]/10 to-[#008C8C]/10 flex items-center justify-center group-hover:from-[#00C4B4]/20 group-hover:to-[#008C8C]/20 transition-colors">
                                        <Icon className="w-8 h-8 text-[#008C8C]" strokeWidth={1.5} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-[#008C8C] font-medium mb-4">{feature.subtitle}</p>
                                <p className="text-slate-600 leading-relaxed font-serif">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
