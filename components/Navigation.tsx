'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const navLinks = [
  { label: 'Research', href: '#research' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Platform', href: '#platform' },
  // { label: 'Investors', href: '/deal' }, // Removed direct link
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePartnerAccess = () => {
    setIsOpen(false); // Close mobile menu if open
    setShowPassword(true);
    setError(false);
    setPasswordInput('');
  };

  const submitPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'phyto123') {
      setShowPassword(false);
      window.open('/docs/Vireo Doc1.pdf', '_blank');
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto relative backdrop-blur-xl transition-all duration-300 rounded-full border border-white/10 shadow-2xl ${scrolled
            ? 'bg-jet-black/80 px-6 py-3 w-auto'
            : 'bg-jet-black/60 px-8 py-4 w-full max-w-5xl'
            }`}
        >
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative h-8 w-8 transition-transform duration-300 group-hover:rotate-12">
                <img
                  src="/images/phyto logos_icon.svg"
                  alt="PhytoNatural Icon"
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <div className={`relative h-4 w-28 transition-all duration-300 ${scrolled ? 'hidden md:block' : 'block'}`}>
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
                  className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-x-0 bottom-1 h-px bg-strong-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="absolute inset-0 bg-white/5 rounded-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10" />
                </a>
              ))}

              {/* Trigger Modal on Desktop */}
              <button
                onClick={handlePartnerAccess}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 group"
              >
                <span className="relative z-10">Investors</span>
                <span className="absolute inset-x-0 bottom-1 h-px bg-strong-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="absolute inset-0 bg-white/5 rounded-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10" />
              </button>
            </div>

            {/* CTA */}
            <div className="hidden lg:block shrink-0">
              <button
                onClick={handlePartnerAccess}
                className="px-5 py-2 bg-gradient-to-r from-teal to-strong-cyan text-white text-sm font-bold rounded-full shadow-lg shadow-teal/20 hover:shadow-strong-cyan/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Lock className="w-3 h-3" />
                Partner Access
              </button>
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
        </motion.nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-jet-black/95 backdrop-blur-xl lg:hidden flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-light text-white hover:text-strong-cyan transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-light text-white hover:text-strong-cyan transition-colors"
                onClick={handlePartnerAccess}
              >
                Investors
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-teal to-strong-cyan text-white text-lg font-bold rounded-full flex items-center gap-2"
                onClick={handlePartnerAccess}
              >
                <Lock className="w-5 h-5" />
                Partner Access
              </motion.button>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 text-white/50 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Password Modal */}
      <AnimatePresence>
        {showPassword && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-jet-black/80 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white/10 border border-white/10 p-8 rounded-3xl max-w-sm w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowPassword(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-4 text-teal">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Partner Access</h3>
                <p className="text-slate-400 text-sm">Please enter the access code to view the deal document.</p>
              </div>

              <form onSubmit={submitPassword} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter Code"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-all text-center tracking-widest"
                    autoFocus
                  />
                  {error && (
                    <p className="text-red-400 text-xs text-center mt-2">Incorrect access code. Please try again.</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-teal to-strong-cyan text-white font-bold rounded-xl shadow-lg shadow-teal/20 hover:scale-[1.02] transition-all duration-300"
                >
                  Access Document
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
