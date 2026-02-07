'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'Research', href: '#research' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Platform', href: '#platform' },
  { label: 'Investors', href: '/deal' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'
          }`}
      >
        {/* Backdrop Blur & Gradient Background */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${scrolled ? 'opacity-100 shadow-lg' : 'opacity-95'
          }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-jet-black via-dark-teal to-jet-black backdrop-blur-md" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {/* Logo - Horizontal Lockup Reconstructed */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img
                  src="/images/phyto logos_icon.svg"
                  alt="PhytoNatural Icon"
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <div className="relative h-5 w-32 transition-transform duration-300 group-hover:translate-x-1">
                <img
                  src="/images/wordmark final123.svg"
                  alt="PhytoNatural"
                  className="w-full h-full object-contain object-left brightness-0 invert"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-strong-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}

              <a
                href="/deal"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-teal to-strong-cyan text-white text-sm font-semibold rounded-full shadow-lg shadow-teal/20 hover:shadow-strong-cyan/30 hover:scale-105 transition-all duration-300"
              >
                Partner Access
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-jet-black pt-24 lg:hidden overflow-hidden"
          >
            <div className="px-6 py-6 space-y-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="block text-2xl font-light text-white hover:text-strong-cyan transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
