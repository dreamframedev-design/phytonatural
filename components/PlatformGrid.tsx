'use client';

import { motion, Variants } from 'framer-motion';
import { Beaker, Lightbulb, Building2 } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        icon: Beaker,
        title: 'Research',
        description:
            'Through our Chapter 20 license and affiliation with a leading U.S. academic institution, we bridge the gap between groundbreaking research and real-world impact. This unique collaboration enables us to drive the next generation of discoveries, transforming health and improving lives worldwide.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description:
            'At the forefront of innovation, we are pioneering advanced research to unlock the potential of cannabinoids in addressing some of the most pressing global health challenges. Our vision is to revolutionize pain management by providing innovative cannabis solutions as a safer, sustainable alternative to opioids.',
    },
    {
        icon: Building2,
        title: 'Platform',
        description:
            "PhytoNatural's full vertically integrated cannabis business model is redefining excellence in the industry. From state-of-the-art cultivation facilities to cutting-edge product innovation and a network of premium retail stores, we seamlessly manage every step of the cannabis journey.",
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

export default function PlatformGrid() {
    return (
        <section id="platform" className="section-padding bg-white swiss-border-bottom">
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
                        The PhytoNatural Difference
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-serif">
                        By maintaining full control of our supply chain, we ensure unparalleled quality,
                        efficiency, and adaptability—positioning PhytoNatural as a market leader poised
                        for growth in a dynamic industry.
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
                                className={`p-8 lg:p-10 group hover:bg-slate-50 transition-colors ${!isLast ? 'md:swiss-border-right' : ''
                                    }`}
                            >
                                <div className="mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4B4]/10 to-[#008C8C]/10 flex items-center justify-center group-hover:from-[#00C4B4]/20 group-hover:to-[#008C8C]/20 transition-colors">
                                        <Icon className="w-8 h-8 text-[#008C8C]" strokeWidth={1.5} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Building Image Section */}
            <div className="mt-20 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <div className="aspect-[21/9] relative">
                            <Image
                                src="/images/phyto building final.jpg"
                                alt="PhytoNatural production facility"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                            <p className="text-white/80 text-sm uppercase tracking-widest mb-2">State-of-the-Art Facilities</p>
                            <h3 className="text-2xl md:text-3xl font-bold text-white max-w-2xl">
                                Vertically Integrated Excellence Across Multiple States
                            </h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
