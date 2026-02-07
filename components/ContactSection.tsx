'use client';

import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="py-24 lg:py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left: Heading & Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-jet-black mb-8 leading-tight">
                            Let's Start a<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-strong-cyan">Conversation.</span>
                        </h2>

                        <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed">
                            Interested in learning more about PhytoNatural's research programs,
                            investment opportunities, or partnership capabilities? We'd love to hear from you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-teal" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-jet-black mb-1">Partnership Inquiries</h3>
                                    <p className="text-slate-500">Connect with our corporate development team.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-strong-cyan/10 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-strong-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-jet-black mb-1">Join Our Mission</h3>
                                    <p className="text-slate-500">Explore career opportunities in cannabis science.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white-smoke p-8 md:p-12 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Name */}
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder=" "
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="peer w-full px-0 py-4 bg-transparent border-b-2 border-slate-300 focus:border-teal outline-none transition-colors text-jet-black placeholder-transparent"
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-teal peer-focus:text-sm"
                                >
                                    Full Name
                                </label>
                            </div>

                            {/* Email */}
                            <div className="relative group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder=" "
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="peer w-full px-0 py-4 bg-transparent border-b-2 border-slate-300 focus:border-teal outline-none transition-colors text-jet-black placeholder-transparent"
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-teal peer-focus:text-sm"
                                >
                                    Email Address
                                </label>
                            </div>

                            {/* Message */}
                            <div className="relative group">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder=" "
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="peer w-full px-0 py-4 bg-transparent border-b-2 border-slate-300 focus:border-teal outline-none transition-colors text-jet-black placeholder-transparent resize-none"
                                    required
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-0 -top-3.5 text-sm text-slate-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-teal peer-focus:text-sm"
                                >
                                    Message
                                </label>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-jet-black to-dark-teal text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all"
                            >
                                <span>Send Message</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
